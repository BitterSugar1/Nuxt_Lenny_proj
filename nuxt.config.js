// https://nuxt.com/docs/api/configuration/nuxt-config

import svgLoader from "vite-svg-loader";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  css: ["@/styles/styles.less"],
  devtools: { enabled: false },
  app: {
    head: {
      htmlAttrs: {
        lang: "ru",
      },
      title: "Lenni Art",
      meta: [
        {
          name: "description",
          content: "Арт пространство для людей, горящих сердцем и делом",
        },
        {
          property: "og:title",
          content: "Lenni Art",
        },
        {
          property: "og:description",
          content: "Арт пространство для людей, горящих сердцем и делом",
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:site_name",
          content: "Lenni Art",
        },
        {
          name: "theme-color",
          content: "#dedede",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, minimum-scale=1",
        },
      ],
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&family=Open+Sans:wght@400;500;600;700&display=swap",
        },
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.ico",
        },
        {
          rel: "manifest",
          href: "/favicons/site.webmanifest",
        },
      ],
    },
  },

  vite: {
    css: {
      preprocessorOptions: {
        less: {
          additionalData: `
            @import "@/styles/variables.less";
            @import "@/styles/mixins.less";
          `,
        },
      },
    },

    plugins: [svgLoader()],
  },

  modules: ["@pinia/nuxt"],
});
