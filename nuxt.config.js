export default {
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
    '~/plugins/ga.client.js',
    '~/plugins/lazysizes.client.js'
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxt/typescript-build',
    '@bazzite/nuxt-optimized-images'
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
   ** Optimized images options
   */
  optimizedImages: {
    inlineImageLimit: -1,
    handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
    optimizeImages: true,
    optimizeImagesInDev: false,
    defaultImageLoader: 'img-loader',
    mozjpeg: {
      quality: 85
    },
    optipng: false,
    pngquant: {
      speed: 7,
      quality: [0.65, 0.8]
    },
    webp: {
      quality: 85
    }
  },
  /*
   ** Build configuration
   */
  build: {
    parallel: true,
    /*
     ** You can extend webpack config here
     */
    extend (_config, { loaders }) {
      loaders.vue.transformAssetUrls.img = ['data-src', 'src']
      loaders.vue.transformAssetUrls.source = ['data-srcset', 'srcset']
    }
  }
}
