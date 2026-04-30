<template>
  <section class="app-listing">
    <h2 class="app-listing__title section-title">{{ title }}</h2>
    <div class="app-listing__list">
      <slot />
    </div>
  </section>
</template>

<script setup>
  const props = defineProps({
    title: {
      type: String,
      default: "",
    },
  });
</script>

<style lang="less">


  .app-listing {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

   @media @bw650 {
    width: 100%;
    mmin-width: 280px;
   }

  &__list {
    display: flex;
    flex-wrap: wrap;
    gap: 115px 58px;

    @media @bw1660 {
      justify-content: center;
      gap: 90px 40px;
      // margin: 0 -20px -100px;
    }

    @media @bw1340 {
      justify-content: center;
      // margin: 0 -15px -100px;
    }

    @media @bw1020 {
      justify-content: center;
      gap: 80px 30px;
    }

    // @media @bw768 {
    //   margin: 0 -10px -80px;
    // }

    @media @bw370 {
      gap: 60px 0;
      margin: 0 auto 0 auto;
      width: 280px;
      max-width: 100%;
    }
  }
  }
</style>