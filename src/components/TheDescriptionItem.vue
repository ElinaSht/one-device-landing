<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue'
import Ellipse from '~/App.vue'

const props = defineProps<{
  url: string
  reverse: boolean
}>()

const isClicked = ref<boolean>(false)

const rootRef = ref<HTMLDivElement>()
const showed = ref<boolean>(false)
const callback = (entries: IntersectionObserverEntry[]) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting)
      showed.value = true
  })
}

// onMounted(() => showed.value = false)

const options: IntersectionObserverInit = {
  root: null,
  rootMargin: '0px',
  threshold: 0,
}

watch(rootRef, () => {
  if (rootRef.value)
    new IntersectionObserver(callback, options).observe(rootRef.value)
})
</script>

<template>
  <div
    ref="rootRef"
    class="description-item"
    :class="{ _reverse: props.reverse, _flip: isClicked }"
    @click="() => isClicked = !isClicked"
  >
    <Transition mode="out-in">
      <div class="description" :class="{ _fadeIn: showed }">
        <div class="ellipse" :class="{ _green: props.reverse, _fadeIn: showed }" />

        <div class="heading">
          Поддержка облачного конфигурирования и обновления
        </div>
        <div class="text">
          вашим специалистам не потребуется делать это вручную
        </div>
      </div>
    </Transition>
    <Transition mode="out-in">
      <div class="image-container" :class="{ _fadeIn: showed }">
        <img alt="image" class="image" :src="props.url">
      </div>
    </Transition>
  </div>
</template>

<style scoped lang="scss">
@use '../styles/constants';
@use '../styles/transitions';

.description-item {
  width: constants.$wdth-desktop;
  display: flex;
  justify-content: space-between;
  gap: 40px;
  padding: 0 20px;

  .description {
    width: 320px;
    line-height: 40px;
    opacity: 0;
    transform: translateY(100px);
    transition: transform 1s, opacity 1s;

    .ellipse {
      position: absolute;
      top: 30px;
      left: 30px;
      width: 200px;
      height: 200px;
      background: rgba(168, 85, 247, 0.3);
      filter: blur(100px);
      transition: scale 1s;

      &._green {
        background: rgba(34, 197, 94, 0.3);
      }

      &._fadeIn {
        opacity: 1;
        scale: 1;
      }
    }

    &._fadeIn {
      opacity: 1;
      transform: translateY(0px);
    }

    .heading {
      font-size: constants.$fsz-h1;
      font-weight: bold;
      letter-spacing: 1.8px;
    }

    .text {
      margin-top: 20px;
    }
  }

  .image-container {
    flex: auto;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    transform: translateX(100px);
    transition: transform 1s, opacity 1s;

    &._fadeIn {
      opacity: 1;
      transform: translateX(0px);
    }

    .image {
      width: 100%;
      height: auto;
      border-radius: 5px;
      box-shadow: constants.$cmn-shadow-violet;
    }
  }

  &._reverse {
    flex-direction: row-reverse;

    .image-container {
      transform: translateX(-100px);
      transition: transform 1s, opacity 1s;

      &._fadeIn {
        opacity: 1;
        transform: translateX(0px);
      }

      .image {
        box-shadow: constants.$cmn-shadow-green;
      }
    }
  }

  @media (max-width: constants.$bpt-xl) {
    width: constants.$wdth-tablet;

    .description {
      line-height: 30px;

      .heading {
        font-size: constants.$fsz-tablet-text;
      }

      .text {
        font-size: constants.$fsz-tablet-text;
      }
    }
  }

  @media (max-width: constants.$bpt-md) {
    position: relative;
    width: 380px;

    .description {
      @include transitions.fade();
      z-index: 2;
      position: absolute;
      top: 10px;
      left: 30px;
      font-size: 12px;
      line-height: 30px;

      .heading {
        font-size: constants.$fsz-text;
        letter-spacing: 1.2px;
      }

      .text {
        margin-top: 10px;
      }
    }

    .image-container {
      @include transitions.fade();
      z-index: 1;

      .image {
        opacity: 0.3;
        filter: blur(1px);
      }
    }

    &._flip {
      .description {
        display: none;
      }

      .image-container {
        .image {
          opacity: 1;
          filter: none;
        }
      }
    }
  }
}
</style>
