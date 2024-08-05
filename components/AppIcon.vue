<template>
  <span :class="['icon', icon]"/>
</template>

<script setup lang="ts">
interface Props {
  icon: string,
}

const props = defineProps<Props>();
const { icon } = toRefs(props);
</script>

<style lang="scss" scoped>
.icon {
  display: inline-block;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;

  &.uk {
    height: 24px;
    width: 24px;
    background-image: url("~/assets/icons/united_kingdom.svg");
  }
}
</style>
