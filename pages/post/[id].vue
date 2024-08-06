<template>
  <NuxtLayout :title="post.title" name="post">
    <img class="post__img" :src="post.image" :alt="post.description">

    <div class="post__text">
      <h3 class="post__caption">About</h3>
      <p v-html="post.description" />
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
const route = useRoute();
const id = route.params.id;
const { data: post } = await useFetch(`https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/${id}`);
</script>

<style lang="scss" scoped>
.post {
  padding-bottom: 80px !important;
}

.post__img {
  display: block;
  width: 100%;
  height: auto;
  margin: 70px 0 80px;
}

.post__caption {
  font-size: 16px;
  font-weight: 400;
  line-height: 1;
  margin: 0 0 30px;
}

.post__text {
  max-width: 695px;
  font-size: 36px;
  line-height: 1.24;

  p {
    margin: 0;
  }
}
</style>
