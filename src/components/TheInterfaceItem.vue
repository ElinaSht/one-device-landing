<script lang="ts" setup>
import { computed, ref, watch } from 'vue'

const props = defineProps<{
  url: string
  name: string
  order: number
}>()

const path = computed(() => {
  return new URL(props.url, import.meta.url).href
})

const rootRef = ref<HTMLDivElement>()
const fadeIn = ref<boolean>(false)
const callback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting)
      fadeIn.value = true
  })
}

const options: IntersectionObserverInit = {
  root: null,
  rootMargin: '0px',
  threshold: 0.35,
}

watch(rootRef, () => {
  if (rootRef.value)
    new IntersectionObserver(callback, options).observe(rootRef.value)
})
</script>

<template>
  <div ref="rootRef" class="interface-item" :class="{ _fadeIn: fadeIn }" :style="{ '--order': props.order }">
    <div class="icon-container">
      <img class="icon" :src="path">
    </div>
    <div class="description">
      {{ props.name }}
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '../styles/constants';

.interface-item{
  --order: 0;
  width: 140px;
  height: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  transform: translateX(100px);
  transition: all 1s;

  &._fadeIn {
    transform: translateX(0px);
    opacity: 1;
    transition-delay: calc(var(--order) * 0.5s);
  }

  .icon-container {
    width: 120px;
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid constants.$clr-border;
    border-radius: constants.$cmn-border-radius;

    .icon {
      width: 100px;
      height: 100px;
    }
  }

  .description {
    margin-top: 30px;
    text-align: center;
  }

  &:hover {
    .icon-container {
      box-shadow: constants.$cmn-shadow-block;
      background-color: rgba(198, 226, 208, 8%);
    }
  }

  @media (max-width: constants.$bpt-xl) {
    width: 120px;
    height: 180px;
    font-size: 16px;

    .icon-container {
      width: 100px;
      height: 100px;

      .icon {
        width: 70px;
        height: 70px;
      }
    }
  }

  @media (max-width: constants.$bpt-md) {
    width: 110px;

    .icon-container{
      width: 60px;
      height: 60px;

      .icon {
        width: 50px;
        height: 50px;
      }
    }

    .description {
      margin-top: 15px;
      font-size: 15px;
    }

  }
}
</style>
