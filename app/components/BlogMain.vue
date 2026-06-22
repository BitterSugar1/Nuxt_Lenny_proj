<template>
  <div class="listing__article-list">
    <div class="events">
    <div class="events__container">
    <AppBlog title="Блог" class="events__listing">
      <BlogCard
        v-for="(blog, index) in blogFeed"
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
const { data: blogFeed } = await useJsonCollection("blog", "/json/blog.json");
</script>

<style lang="less"></style>
