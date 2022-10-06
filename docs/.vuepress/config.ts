import {defineUserConfig, defaultTheme} from 'vuepress'

export default defineUserConfig({
  title: 'xh-polaris Style Guide',
  // description: '',
  head: [
    ['link', {rel: 'icon', href: 'https://static.xhpolaris.com/cat_world.jpg'}]
  ],
  base: '/',
  theme: defaultTheme({
    navbar: [
      {text: 'Home', link: '/'},
      {text: 'Guide', link: '/guide/'},
      {text: 'About us', link: 'https://www.xhpolaris.com'},
    ],
    sidebar: [
      {
        text: '写在前面',
        link: '/guide/foreword/'
      },
      {
        text: '命名规范',
        link: '/guide/naming/'
      },
      {
        text: 'GIT 使用规范',
        link: '/guide/git/'
      },
      {
        text: 'CSS 代码风格',
        link: '/guide/css/'
      },
      {
        text: 'JavaScript 代码风格',
        link: '/guide/js/'
      },
      {
        text: 'TypeScript 代码风格',
        link: '/guide/ts/'
      },
      {
        text: 'React 代码风格',
        link: '/guide/react/'
      },
      {
        text: 'Vue 代码风格',
        link: '/guide/vue/'
      },
    ],
    editLinkText: 'Edit on GitHub',
    themePlugins: {
      backToTop: true
    },
    lastUpdated: true,
    repo: 'xh-polaris/style-guide',
    repoLabel: 'GitHub',
    docsRepo: 'xh-polaris/style-guide',
    docsDir: 'docs',
    docsBranch: 'main',
    editLink: true,
  })
})
