// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  alias: {
    "~": "/<rootDir>",
    "@": "/<rootDir>",
    assets: "/<rootDir>/assets",
  },
  css: [
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.min.css",
  ],
  build: {
    transpile: ["vuetify"],
  },
  modules: ["@nuxtjs/i18n"],
  i18n: {
    locales: [
      {
        code: "lt",
        name: "Lietuvių",
        iso: "lt-LT",
        files: ["lt-LT.json"],
      },
      {
        code: "en",
        name: "English",
        iso: "en-US",
        files: ["en-US.json"],
      },
    ],
    lazy: true,
    strategy: "prefix",
    langDir: "lang",
    defaultLocale: "lt",
    vueI18n: {
      // If fallback is needed, you need to define
      fallbackLocale: "lt",
    },
  },
});
