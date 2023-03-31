import { createVuetify } from "vuetify";
// import { aliases, mdi } from "vuetify/iconsets/mdi";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: true,
    components,
    directives,
    display: {
      mobileBreakpoint: "sm",
      thresholds: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1264,
      },
    },
    theme: {
      themes: {
        light: {
          dark: false,
          colors: {
            primary: "#A5D6A7",
            secondary: "#F5F5F5",
          },
        },
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
