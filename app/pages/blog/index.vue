<template>
  <div class="events">
    <div class="events__container">
    <AppBlog title="Блог" class="events__listing">
      <BlogCard
        v-for="(card, index) in list"
        :key="index"
        :data="card"
        class="app-listing__card"
      />
    </AppBlog>
    </div>

    <button type="button" class="more-btn events__more-btn">
      Показать всё
      <SvgIcon
        class="more-btn__arrow"
        name="arrow_down"
        width="62"
        height="92"
      />
    </button>
  </div>
</template>

<script setup>
  const list = ref([]);

  const URL = "http://localhost:3000/json/blog.json";

  const { data } = await useAsyncData(`blog`, () => {
    return $fetch(URL);
  });
  if (data?.value) list.value = data.value;
</script>

<style lang="less">
  .events {
  padding: 110px 0 100px;

  @media @bw1340 {
    padding: 100px 0 100px;
  }

  @media @bw768 {
    padding: 50px 0 35px;
  }

  &__more-btn {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      align-items: center;
      max-width: 1334px;
      width: 100%;
      margin-right: auto;
      margin-left: auto;
      border-width: 0;
      @media @bw370 {
        max-width: 370px;
      }
       &:hover {
    color: @red;
      text-decoration-color: @red;
      background: none;
  }
    }

  &__container {
  .container();

  &__listing {
    display: block;
    margin-bottom: 100px;
  }

  &__services {
    margin-top: 100%;
    margin-bottom: 50px;
  }

  &__span {
    display: flex;
    align-items: center;
    grid-area: span;
    font-family: @font1;
    font-weight: 600;
    font-size: 16px;
    background-color: @black;
    text-decoration: none;
    transition: color 0.2s;
  }
}
}

.arrow {
  flex-shrink: 0;
  position: relative;
  display: inline-block;
  width: 92px;
  height: 60px;
  padding: 0;
  border: none;
  background: none;
  color: @black;
  font-size: 0;
  text-decoration: none;
  transition: color 0.2s;
  cursor: pointer;
  @media @bw1340 {
    width: 67px;
    height: 40px;
  }
  &:active {
    color: @red;
  }
  &:hover {
    @media (hover: hover) {
      color: @red;
    }
  }
  
  &--left {
    .arrow__icon {
      transform: rotate(180deg);
    }
  }
}

</style>