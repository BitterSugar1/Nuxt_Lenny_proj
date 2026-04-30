<template>
  <div class="listing__article-list">
    <div class="events">
    <div class="events__container">
    <AppBlog title="Блог" class="events__listing">
      <BlogCard
        v-for="(blog, index) in list"
        :key="index"
        :data="blog"
        class="app-listing__card"
      />
    </AppBlog>
    </div>
  </div>
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

<style lang="less"></style>