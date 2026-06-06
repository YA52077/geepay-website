import {
  defineConfig,
  resolveSiteDataByRoute,
  type DefaultTheme,
  type HeadConfig
} from 'vitepress'

const prod = !!process.env.NETLIFY
const siteUrl = 'https://sc58.cn'

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
            '<a href="https://beian.miit.gov.cn/" target="_blank" style="text-decoration: none;">鄂ICP备2021021587号</a>',
          copyright:
            'GeePay  © 2026 All Rights Reserved.<a href="https://codex.48nh.com/" target="_blank" style="text-decoration: none; font-family: sans-serif !important;">ClaudeAPI</a>'
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
            '<a href="https://beian.miit.gov.cn/" target="_blank" style="text-decoration: none;">鄂ICP备2021021587号</a>',
          copyright:
            'GeePay © 2026 All Rights Reserved.<a href="https://codex.48nh.com/" target="_blank" style="text-decoration: none; font-family: sans-serif !important;">ClaudeAPI</a>'
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
