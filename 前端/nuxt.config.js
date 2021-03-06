import pkg from './package'

export default {
  mode: 'spa',

  router: {
    middleware: 'check-login'
  },

  head: {
    title: pkg.displayName,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: pkg.description },
      { name: 'author', content: pkg.author }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** 自定义进度条颜色
  */
  loading: { color: '#6cf' },

  /*
  ** 全局样式表
  */
  css: [
    'assets/main.css'
  ],

  /*
  ** 在安装App之前加载插件
  */
  plugins: [
    '~/plugins/validate.js',
    '~/plugins/lodash.js'
  ],

  /*
  ** Nuxt.js模块
  */
  modules: [
    // 文档: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // 文档: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    ['@nuxtjs/proxy', { pathRewrite: { '^/api': '/' } }]
  ],

  /*
  ** Axios模块配置
  */
  axios: {
    // 文档: https://axios.nuxtjs.org/options
    baseURL: '/api'
  },

  /*
  ** 代理配置
  */
  proxy: {
    '/api': 'http://127.0.0.1:8000'
  }
}
