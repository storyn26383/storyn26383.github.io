export default {
  mode: 'spa',
  /*
   ** Environments
   */
  env: {
    GA_TRACKING_ID: 'UA-76814426-1'
  },
  /*
   ** Headers of the page
   */
  head: {
    title: "Sasaya's Resume",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Sasaya&apos;s Resume'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
    'highlight.js/styles/tomorrow-night.css',
    '~/assets/styles/buefy.scss'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/fontawesome.js',
    '~/plugins/highlight.js',
    { src: '~/plugins/ga.js', ssr: false }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxt/typescript-build'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://buefy.github.io/#/documentation
    'nuxt-buefy',
    '@nuxtjs/pwa'
  ],
  /*
   ** Buefy options
   */
  buefy: {
    css: false,
    materialDesignIcons: false
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend (_config, _ctx) {}
  }
}
