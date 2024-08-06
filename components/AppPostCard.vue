<template>
  <NuxtLink class="post-card" to="/">
    <img class="post-card__img" :src="data.image"/>
    <span class="post-card__text">
      {{ data.preview }}
    </span>
    <span class="post-card__more">
      Read more
    </span>
  </NuxtLink>
</template>

<script setup lang="ts">
interface Props {
  data: {
    createdAt: string,
    description: string,
    id: string,
    image: string,
    preview: string,
    title: string,
  },
}

const props = defineProps<Props>();
const { data } = toRefs(props);
</script>

<style lang="scss" scoped>
.post-card {
  display: block;
  cursor: pointer;

  color: inherit;
  text-decoration: none;
  transition: .25s ease-in-out;

  &:hover {
    transform: translate(0, -30px);

    .post-card__more {
      display: block;
    }
  }
}

.post-card__img {
  display: block;
  width: 100%;
  height: auto;
}

.post-card__text {
  display: -webkit-box;
  margin: 24px 0 0 0;
  width:100%;
  overflow: hidden;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
}

.post-card__more {
  display: none;
  padding: 12px 0 0 0;
  color: #E2BEFF;
  position: absolute;
}
</style>
