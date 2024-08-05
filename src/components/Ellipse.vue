<script lang="ts" setup>
// const props = defineProps<{
//   green: boolean
// }>()
</script>

<template>
  <div class="ellipse" />
</template>

<style scoped lang="scss">
.ellipse {
  //position: absolute;
  //top: 100px;
  //left: 100px;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: rgba(168, 85, 247, 0.5);
  filter: blur(100px);

  &._green {
    background: rgba(34, 197, 94, 0.5);
  }
}
</style>
