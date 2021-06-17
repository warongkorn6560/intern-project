export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "intern-project",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/styles/main"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/tailwindcss"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      "nuxt-font-loader-strategy",
      {
        fonts: [
          {
            fileExtensions: ["woff2", "woff"],
            fontFamily: "silka",
            fontFaces: [
              {
                preload: true,
                localSrc: ["Silka Bold"],
                src: "/fonts/silka/silka-bold-webfont",
                fontWeight: 700,
                fontStyle: "normal"
              },
              {
                preload: true,
                localSrc: ["Silka semiBold"],
                src: "/fonts/silka/silka-semibold-v2-webfont",
                fontWeight: 600,
                fontStyle: "normal"
              },
              {
                preload: true,
                localSrc: ["Silka medium"],
                src: "/fonts/silka/silka-medium-webfont",
                fontWeight: 400,
                fontStyle: "normal"
              },
              {
                preload: true,
                localSrc: ["Silka light"],
                src: "/fonts/silka/silka-light-webfont",
                fontWeight: 300,
                fontStyle: "normal"
              }
            ]
          },
          {
            fileExtensions: ["woff2", "woff"],
            fontFamily: "IBMPlexSansThai",
            fontFaces: [
              {
                preload: true,
                localSrc: ["IBMPlexSansThai Bold"],
                src: "/fonts/ibm/IBMPlexSansThai-Bold",
                fontWeight: 700,
                fontStyle: "normal"
              },
              {
                preload: true,
                localSrc: ["IBMPlexSansThai semiBold"],
                src: "/fonts/ibm/IBMPlexSansThai-SemiBold",
                fontWeight: 600,
                fontStyle: "normal"
              },
              {
                preload: true,
                localSrc: ["IBMPlexSansThai medium"],
                src: "/fonts/ibm/IBMPlexSansThai-Medium",
                fontWeight: 500,
                fontStyle: "normal"
              },
              {
                preload: true,
                localSrc: ["IBMPlexSansThai regular"],
                src: "/fonts/ibm/IBMPlexSansThai-Regular",
                fontWeight: 400,
                fontStyle: "normal"
              },
              {
                preload: true,
                localSrc: ["IBMPlexSansThai light"],
                src: "/fonts/ibm/IBMPlexSansThai-Light",
                fontWeight: 300,
                fontStyle: "normal"
              }
            ]
          },
          {
            fileExtensions: ["woff2"],
            useWorker: true,
            ignoreLighthouse: true,
            fontFamily: "Font Awesome 5 Pro",
            fontFaces: [
              {
                localSrc: ["Font Awesome 5 Pro Solid"],
                src: "/fonts/webfonts/fa-solid-900",
                fontWeight: 900,
                fontStyle: "normal"
              },
              {
                localSrc: ["Font Awesome 5 Pro light"],
                src: "/fonts/webfonts/fa-light-300",
                fontWeight: 300,
                fontStyle: "normal"
              },
              {
                localSrc: ["Font Awesome 5 Pro Regular"],
                src: "/fa/webfonts/fa-regular-400",
                fontWeight: 400,
                fontStyle: "normal"
              }
            ]
          }
        ]
      }
    ]
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
