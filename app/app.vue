<template>
  <div class="app">
    <PageHeader class="app__header" />

    <main class="app__main">
      <NuxtPage class="app__page" />
    </main>

    <PageFooter class="app__footer" />
  </div>
</template>

<script setup>

const store = useStore();

  useHead({
    htmlAttrs: {
      lang: () => "ru",
    },

bodyAttrs: {
      class: {
        "overflow-nav": () => store.navActive,
        overflow: () => store.getModal,
      }
    },

    title: "Lenni Art",
    meta: [
      {
        name: "og:title",
        property: "og:title",
        content: "Lenni Art",
      },
      {
        name: "description",
        content: "Арт пространство для людей, горящих сердцем и делом",
      },
      {
        name: "og:description",
        property: "og:description",
        content: "Арт пространство для людей, горящих сердцем и делом",
      },
      { name: "og:type", property: "og:type", content: "website" },
      {
        name: "og:site_name",
        property: "og:site_name",
        content: "Lenni Art",
      },
      { name: "theme-color", content: "#dedede" },
      {
  name: "viewport",
  content: "width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no",
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
        rel: "shortcut icon",
        type: "image/vnd.microsoft.icon",
        href: "/favicons/favicon.ico?v=1",
      },
      {
        rel: "icon",
        type: "image/png",
        href: "/favicons/favicon-32x32.png",
        sizes: "32x32",
      },
      {
        rel: "icon",
        type: "image/png",
        href: "/favicons/favicon-16x16.png",
        sizes: "16x16",
      },
    ],


  });
</script>

<style lang="less">
@bw1660: ~"(max-width: 1660px)";
@bw768: ~"(max-width: 768px)";
.app {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-top: 147px;

  @media @bw1660 {
    padding-top: 111px;
  }

  @media @bw768 {
    padding-top: 70px;
  }
  &__main {
    flex: 1 0 auto;
    display: flex;
    flex-direction: column;
  }
  &__footer {
    flex: 0 0 auto;
  }
  &__page {
      flex: 1 0 auto;
    }

}
</style>