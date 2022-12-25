import { defineNuxtConfig } from "nuxt3";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  css: ["@/assets/css/main.css"],
  meta: {
    link: [
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css",
      },
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/uikit@3.15.19/dist/css/uikit.min.css",
      },
    ],

    script: [
      {
        rel: "stylesheet",
        src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js",
      },
      {
        rel: "stylesheet",
        src: "https://cdn.jsdelivr.net/npm/uikit@3.14.1/dist/js/uikit.min.js",
      },
      {
        rel: "stylesheet",
        src: "https://cdn.jsdelivr.net/npm/uikit@3.14.1/dist/js/uikit-icons.min.js",
      },
    ],
  },
});
