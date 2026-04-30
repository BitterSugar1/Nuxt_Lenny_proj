<template>
  <div class="events">
    <div class="events__container">
    <AboutMain/>
    </div>
  </div>
</template>

<script setup></script>

<style lang="less">
  .events {
  padding: 110px 0 100px;

  @media @bw1340 {
    padding: 100px 0 100px;
  }

  @media @bw768 {
    padding: 50px 0 35px;
  }

  &__container {
  .container();
  }
}

</style>