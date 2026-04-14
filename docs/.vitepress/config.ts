import {
  defineConfig,
  resolveSiteDataByRoute,
  type HeadConfig
} from 'vitepress'

const prod = !!process.env.NETLIFY
const siteUrl = 'https://vitepress.dev'

const ogImage = new URL('/img/sc58.png', siteUrl).href

const localeToOgLocaleMap: Record<string, string> = {
  root: 'zh_CN'
}

export default defineConfig({
  title: 'GeePay',
  titleTemplate: '行业领先的免签约支付平台',

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

    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
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

    socialLinks: [
      { icon: 'gitee', link: 'https://gitee.com/xzbaby_0'  }
    ]
  },

  locales: {
    root: { label: '简体中文', lang: 'zh-Hans', dir: 'ltr' }
  },

  vite: {
    experimental: {
      enableNativePlugin: true
    }
  },

  // prettier-ignore
  transformPageData: (pageData, ctx) => {
    const url = new URL(pageData.relativePath.replace(/(?:(^|)index)?\.md$/, '$1'), siteUrl).href
    const site = resolveSiteDataByRoute(ctx.siteConfig.site, pageData.relativePath)
    const title = pageData.title ? `${pageData.title} | 行业领先的免签约支付平台` : `${site.title} | 行业领先的免签约支付平台`
    const description = pageData.description || site.description
    const locale = localeToOgLocaleMap[site.localeIndex || 'root']

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