import {
  defineConfig,
  resolveSiteDataByRoute,
  type DefaultTheme,
  type HeadConfig
} from 'vitepress'
import { payUrl } from './site.config'

export { payUrl }

const siteUrl = payUrl

const ogImage = new URL('/img/sc58.png', siteUrl).href

const localeToOgLocaleMap: Record<string, string> = {
  root: 'zh_CN',
  zh: 'zh_CN',
  en: 'en_US'
}

const localeTitleTemplateMap: Record<string, string> = {
  root: 'GeePay',
  zh: '行业领先的免签约支付平台',
  en: 'Contract-free Payment Platform'
}

export default defineConfig({
  title: 'GeePay',
  titleTemplate: '行业领先的免签约支付平台',
  description:
    'GeePay是免签约支付产品，完美解决支付难题，一站式接入支付宝，微信，财付通，QQ钱包,微信wap，帮助开发者快速集成到自己相应产品，效率高，见效快，费率低！',

  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,
  ignoreDeadLinks: true,

  markdown: {
    math: true,
    codeTransformers: [
      {
        postprocess(code) {
          return code
            .replaceAll('[!!code', '[!code')
            .replaceAll('@@include', '@include')
        }
      }
    ],
    config(md) {
      const defaultRender = md.render.bind(md)
      md.render = (src, env) => {
        const cleanUrl = payUrl.replace(/\/+$/, '')
        const replaced = src.replace(
          /\$PAY_URL|\{\{\s*(?:PAY_URL|payUrl)\s*\}\}/g,
          cleanUrl
        )
        return defaultRender(replaced, env)
      }

      const fence = md.renderer.rules.fence!
      md.renderer.rules.fence = function (tokens, idx, options, env, self) {
        const codeCopyButtonTitle = '复制代码'
        return fence(tokens, idx, options, env, self).replace(
          '<button title="Copy Code" class="copy"></button>',
          `<button title="${codeCopyButtonTitle}" class="copy"></button>`
        )
      }
    }
  },

  sitemap: {
    hostname: siteUrl,
    transformItems(items) {
      return items.filter((item) => !item.url.includes('migration'))
    }
  },

  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/img/sc58.png' }],
    ['meta', { name: 'theme-color', content: '#eed85fff' }]
  ],

  vite: {
    plugins: [
      {
        name: 'vite-plugin-pay-url-variable',
        enforce: 'pre',
        transform(code, id) {
          if (id.endsWith('.md') || id.includes('.md?')) {
            const cleanUrl = payUrl.replace(/\/+$/, '')
            return code.replace(
              /\$PAY_URL|\{\{\s*(?:PAY_URL|payUrl)\s*\}\}/g,
              cleanUrl
            )
          }
        }
      }
    ]
  },

  themeConfig: {
    logo: { src: '/img/sc58.png', width: 24, height: 24 },
    siteTitle: 'GeePay',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/YA52077/geepay-website' }
    ]
  },

  locales: {
    zh: {
      label: '简体中文',
      lang: 'zh-Hans',
      dir: 'ltr',
      link: '/zh/',
      title: 'GeePay',
      titleTemplate: '行业领先的免签约支付平台',
      description:
        'GeePay是免签约支付产品，完美解决支付难题，一站式接入支付宝，微信，财付通，QQ钱包,微信wap，帮助开发者快速集成到自己相应产品，效率高，见效快，费率低！',
      themeConfig: {
        nav: navZh(),
        sidebar: {
          '/zh/doc/': { base: '/zh/doc/', items: sidebarDocZh() },
          '/zh/sponsorship/': {
            base: '/zh/sponsorship/',
            items: sidebarSponsorshipZh()
          }
        },
        search: {
          provider: 'local',
          options: {
            locales: {
              zh: {
                translations: {
                  button: {
                    buttonText: '搜索',
                    buttonAriaLabel: '搜索'
                  },
                  modal: {
                    noResultsText: '没有找到结果',
                    resetButtonTitle: '清除查询',
                    footer: {
                      selectText: '选择',
                      navigateText: '切换',
                      closeText: '关闭'
                    }
                  }
                }
              }
            }
          }
        },
        editLink: {
          pattern: 'https://github.com/YA52077/geepay-website',
          text: '在 GitHub 上编辑此页面'
        },
        footer: {
          message:
            '<span class="footer-links-group"><span class="footer-links-label">推荐服务</span><a class="footer-badge" href="https://ip.lxrr.cn/" target="_blank" rel="noopener"><svg class="badge-icon" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg><span>IP检测</span></a><a class="footer-badge" href="https://codex.lxrr.cn/" target="_blank" rel="noopener"><svg class="badge-icon" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg><span>ClaudeAPI</span></a><a class="footer-badge" href="https://github.com/YA52077/" target="_blank" rel="noopener"><svg class="badge-icon" viewBox="0 0 24 24" width="13" height="13" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg><span>GitHub</span></a></span>',
          copyright:
            '<span class="footer-meta-group"><span class="footer-copyright-item">© 2026 <a href="/zh/" class="footer-brand-link">GeePay</a> · All Rights Reserved</span><span class="footer-dot-sep">·</span><a class="footer-icp-link" href="https://beian.miit.gov.cn/" target="_blank" rel="noopener"><svg class="icp-shield-icon" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg><span>鄂ICP备2021021587号</span></a></span>'
        },
        docFooter: {
          prev: '上一页',
          next: '下一页'
        },
        outline: {
          label: '页面导航'
        },
        lastUpdated: {
          text: '最后更新于'
        },
        notFound: {
          title: '页面未找到',
          quote:
            '但如果你不改变方向，并且继续寻找，你可能最终会到达你所前往的地方。',
          linkLabel: '前往首页',
          linkText: '带我回首页'
        },
        langMenuLabel: '多语言',
        returnToTopLabel: '回到顶部',
        sidebarMenuLabel: '菜单',
        darkModeSwitchLabel: '主题',
        lightModeSwitchTitle: '切换到浅色模式',
        darkModeSwitchTitle: '切换到深色模式',
        skipToContentLabel: '跳转到内容'
      }
    },

    en: {
      label: 'English',
      lang: 'en-US',
      dir: 'ltr',
      link: '/en/',
      title: 'GeePay',
      titleTemplate: 'Contract-free Payment Platform',
      description:
        'GeePay is a contract-free payment platform that helps developers quickly integrate Alipay, WeChat Pay, QQ Wallet and other payment methods.',
      themeConfig: {
        nav: navEn(),
        sidebar: {
          '/en/doc/': { base: '/en/doc/', items: sidebarDocEn() },
          '/en/sponsorship/': {
            base: '/en/sponsorship/',
            items: sidebarSponsorshipEn()
          }
        },
        search: {
          provider: 'local',
          options: {
            locales: {
              en: {
                translations: {
                  button: {
                    buttonText: 'Search',
                    buttonAriaLabel: 'Search'
                  },
                  modal: {
                    noResultsText: 'No results found',
                    resetButtonTitle: 'Clear query',
                    footer: {
                      selectText: 'Select',
                      navigateText: 'Navigate',
                      closeText: 'Close'
                    }
                  }
                }
              }
            }
          }
        },
        editLink: {
          pattern: 'https://github.com/YA52077/geepay-website',
          text: 'Edit this page on GitHub'
        },
        footer: {
          message:
            '<span class="footer-links-group"><span class="footer-links-label">Services</span><a class="footer-badge" href="https://ip.lxrr.cn/" target="_blank" rel="noopener"><svg class="badge-icon" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg><span>IP Lookup</span></a><a class="footer-badge" href="https://codex.lxrr.cn/" target="_blank" rel="noopener"><svg class="badge-icon" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg><span>ClaudeAPI</span></a><a class="footer-badge" href="https://github.com/YA52077/" target="_blank" rel="noopener"><svg class="badge-icon" viewBox="0 0 24 24" width="13" height="13" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg><span>GitHub</span></a></span>',
          copyright:
            '<span class="footer-meta-group"><span class="footer-copyright-item">© 2026 <a href="/en/" class="footer-brand-link">GeePay</a> · All Rights Reserved</span><span class="footer-dot-sep">·</span><a class="footer-icp-link" href="https://beian.miit.gov.cn/" target="_blank" rel="noopener"><svg class="icp-shield-icon" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg><span>鄂ICP备2021021587号</span></a></span>'
        },
        docFooter: {
          prev: 'Previous page',
          next: 'Next page'
        },
        outline: {
          label: 'On this page'
        },
        lastUpdated: {
          text: 'Last updated'
        },
        notFound: {
          title: 'Page not found',
          quote: 'The page you are looking for does not exist.',
          linkLabel: 'Go to home',
          linkText: 'Back to home'
        },
        langMenuLabel: 'Change language',
        returnToTopLabel: 'Return to top',
        sidebarMenuLabel: 'Menu',
        darkModeSwitchLabel: 'Appearance',
        lightModeSwitchTitle: 'Switch to light theme',
        darkModeSwitchTitle: 'Switch to dark theme',
        skipToContentLabel: 'Skip to content'
      }
    }
  },

  // prettier-ignore
  transformPageData: (pageData, ctx) => {
    const url = new URL(pageData.relativePath.replace(/(?:(^|)index)?\.md$/, '$1'), siteUrl).href
    const site = resolveSiteDataByRoute(ctx.siteConfig.site, pageData.relativePath)
    const localeIndex = site.localeIndex || 'root'
    const titleTemplate = localeTitleTemplateMap[localeIndex] || localeTitleTemplateMap.root
    const title = pageData.title ? `${pageData.title} | ${titleTemplate}` : `${site.title} | ${titleTemplate}`
    const description = pageData.description || site.description
    const locale = localeToOgLocaleMap[localeIndex] || localeToOgLocaleMap.root

    ;((pageData.frontmatter.head ??= []) as HeadConfig[]).push(
      ['meta', { property: 'og:url', content: url }],
      ['meta', { property: 'og:title', content: title }],
      ['meta', { property: 'og:description', content: description }],
      ['meta', { property: 'og:type', content: 'website' }],
      ['meta', { property: 'og:locale', content: locale }],
      ['meta', { property: 'og:site_name', content: 'GeePay' }],
      ['meta', { property: 'og:image', content: ogImage }],
      ['meta', { property: 'og:image:secure_url', content: ogImage }],
      ['meta', { property: 'og:image:type', content: 'image/jpeg' }],
      ['meta', { property: 'og:image:width', content: '1280' }],
      ['meta', { property: 'og:image:height', content: '640' }],
      ['meta', { property: 'og:image:alt', content: 'GeePay' }],
      ['link', { rel: 'canonical', href: url }]
    )

    if (pageData.frontmatter?.hero?.actions) {
      const cleanUrl = payUrl.replace(/\/+$/, '')
      pageData.frontmatter.hero.actions.forEach((action: any) => {
        if (typeof action.link === 'string') {
          action.link = action.link.replace(
            /\$PAY_URL|\{\{\s*(?:PAY_URL|payUrl)\s*\}\}/g,
            cleanUrl
          )
        }
      })
    }
  }
})

function navZh(): DefaultTheme.NavItem[] {
  return [
    { text: '首页', link: '/zh/', activeMatch: '^/zh/$' },
    { text: '指南', link: '/zh/doc/index', activeMatch: '/zh/doc/' },
    {
      text: '🥤一杯咖啡',
      link: '/zh/sponsorship/thanks',
      activeMatch: '/zh/sponsorship/'
    }
  ]
}

function navEn(): DefaultTheme.NavItem[] {
  return [
    { text: 'Home', link: '/en/', activeMatch: '^/en/$' },
    { text: 'Guide', link: '/en/doc/index', activeMatch: '/en/doc/' },
    {
      text: 'Sponsor',
      link: '/en/sponsorship/thanks',
      activeMatch: '/en/sponsorship/'
    }
  ]
}

function sidebarSponsorshipZh(): DefaultTheme.SidebarItem[] {
  return [
    { text: '🥤一杯咖啡' },
    { text: '榜上有名', link: 'thanks' },
    { text: '提供赞助', link: 'sponsor' }
  ]
}

function sidebarSponsorshipEn(): DefaultTheme.SidebarItem[] {
  return [
    { text: 'Sponsor' },
    { text: 'Acknowledgements', link: 'thanks' },
    { text: 'Become a Sponsor', link: 'sponsor' }
  ]
}

function sidebarDocZh(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '目录',
      collapsed: false,
      items: [
        { text: '接口说明', link: 'index' },
        { text: '签名规则', link: 'sign_note' },
        { text: '支付方式列表', link: 'paytype' }
      ]
    },
    {
      text: '支付相关接口',
      collapsed: true,
      items: [
        { text: '页面跳转支付', link: 'pay_submit' },
        { text: '统一下单接口', link: 'pay_create' },
        { text: '订单查询', link: 'pay_query' },
        { text: '订单退款', link: 'pay_refund' },
        { text: '订单退款查询', link: 'pay_refundquery' },
        { text: '支付结果通知', link: 'pay_notify' }
      ]
    },
    {
      text: '商户相关接口',
      collapsed: true,
      items: [
        { text: '查询商户信息', link: 'merchant_info' },
        { text: '查询订单列表', link: 'merchant_orders' }
      ]
    },
    {
      text: '代付相关接口',
      collapsed: true,
      items: [
        { text: '转账发起', link: 'transfer_submit' },
        { text: '转账查询', link: 'transfer_query' },
        { text: '可用余额查询', link: 'transfer_balance' }
      ]
    },
    { text: 'SDK下载', link: 'sdk' }
  ]
}

function sidebarDocEn(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Contents',
      collapsed: false,
      items: [
        { text: 'API Overview', link: 'index' },
        { text: 'Signature Rules', link: 'sign_note' },
        { text: 'Payment Methods', link: 'paytype' }
      ]
    },
    {
      text: 'Payment APIs',
      collapsed: true,
      items: [
        { text: 'Redirect Payment', link: 'pay_submit' },
        { text: 'Create Payment Order', link: 'pay_create' },
        { text: 'Query Order', link: 'pay_query' },
        { text: 'Refund Order', link: 'pay_refund' },
        { text: 'Query Refund', link: 'pay_refundquery' },
        { text: 'Payment Notification', link: 'pay_notify' }
      ]
    },
    {
      text: 'Merchant APIs',
      collapsed: true,
      items: [
        { text: 'Query Merchant Info', link: 'merchant_info' },
        { text: 'Query Order List', link: 'merchant_orders' }
      ]
    },
    {
      text: 'Transfer APIs',
      collapsed: true,
      items: [
        { text: 'Submit Transfer', link: 'transfer_submit' },
        { text: 'Query Transfer', link: 'transfer_query' },
        { text: 'Query Available Balance', link: 'transfer_balance' }
      ]
    },
    { text: 'SDK Download', link: 'sdk' }
  ]
}
