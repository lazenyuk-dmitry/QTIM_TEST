<template>
  <button :class="['button', variant]" type="button" v-on="$listeners">
    <slot />
  </button>
</template>

<script setup lang="ts">
const VARIANTS = ['uk', 'triangle'] as const;

type Variants = typeof VARIANTS[number];

interface Props {
  variant?: Variants,
}

const props = defineProps<Props>();
const { variant } = toRefs(props);
</script>

<style lang="scss" scoped>
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 142px;
  height: 52px;
  padding: 16px 30px;
  border-radius: 30px;
  background: #101010;

  font-family: 'TT Commons';
  font-size: 20px;
  font-weight: 400;
  line-height: 1;
  text-align: center;
  color: #fff;

  &.circle {
    height: 32px;
    width: 32px;
    border-radius: 50%;
    padding: 5px;
  }
}
</style>
