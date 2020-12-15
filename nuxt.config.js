
export default {
  ssr: false,
  /*
  ** Headers of the page
  */
  head: {
    title: 'Online vlaggenmast',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'title', content: 'Online vlaggenmast'},
      { hid: 'description', name: 'description', content: '' },

      { property: 'og:type', content: 'website'},
      { property: 'og:url', content: 'https://vlag.steefmin.xyz/'},
      { property: 'og:title', content: 'Online vlaggenmast'},
      { property: 'og:image', content: 'https://vlag.steefmin.xyz/android-chrome-512x512.png' },

      { property: 'twitter:url', content: 'https://vlag.steefmin.xyz/'},
      { property: 'twitter:title', content: 'Online vlaggenmast'},
      { property: 'twitter:image', content: 'https://vlag.steefmin.xyz/android-chrome-512x512.png' },
    ],
    link: [
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#21468b' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    'bootstrap-vue/nuxt'
  ],
  bootstrapVue: {
    components: [
      'BButton',
      'BFormInput',
      'BNav',
      'BNavbar',
      'BNavItem',
      'BPopover'
    ]
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
