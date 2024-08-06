<template>
  <main class="main">
    <div class="container">
      <h1>{{ title }}</h1>
      <slot />
    </div>
  </main>
</template>

<script setup lang="ts">
interface Props {
  title: string,
}

const props = defineProps<Props>();
const { title } = toRefs(props);
</script>

<style lang="scss" scoped>
.main {
  padding: 120px 0 80px;
}
</style>
