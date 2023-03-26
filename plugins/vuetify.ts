import { createVuetify } from "vuetify";
// import { aliases, mdi } from "vuetify/iconsets/mdi";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: true,
    components,
    directives,
    theme: {
      themes: {
        light: {
          dark: false,
          colors: {
            primary: "#81C784",
            secondary: "#E8F5E9",
          },
        },
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
