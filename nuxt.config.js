export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // TEST ON REAL MOBILE DEVICE ON YOUR LOCAL NETWORK : - - - -
  // server: {     
  //   port: 8000,
  //   host: '0.0.0.0'
  // },
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'test-tech',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { 
      src: '~/plugins/persistedState.client.js' 
    }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/dotenv',
    "@nuxtjs/svg"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources',
  ],

  // GLOBAL CSS THAT ACTUALLY WORKS
  styleResources: {
    scss: [
      '@/assets/css/mediaqueries.scss',
      '@/assets/css/core.scss',
      '@/assets/css/reset.scss',
    ]
  },
  

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
  
}
