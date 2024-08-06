<template>
  <NuxtLayout title="Articles">
    <div class="article__list">
      <div v-for="post in posts" class="article__card-wrap" :key="post.id">
        <AppPostCard class="article__card" :data="post" />
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import type { PostData } from "@/models/post.ts";

const { data: posts } = await useFetch<PostData[]>('https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/');
</script>

<style lang="scss" scoped>
.article__list {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
  gap: 40px 0;
}

.article__card-wrap {
  flex: 0 1 25%;
  padding: 0 15px;
}
</style>
