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
const uiStore = useUiStore();

const bodyClass = computed(() => ({
  "overflow-nav": uiStore.isNavigationOpen,
  overflow: uiStore.hasOpenModal,
}));

useHead({
  bodyAttrs: {
    class: bodyClass,
  },
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
