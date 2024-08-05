<script lang="ts" setup>
import { ref, watch } from 'vue'
import TheInterfaceItem from '~/components/TheInterfaceItem.vue'

const itemsList = [
  {
    id: 1,
    url: '../assets/icons/com-port-icon.svg',
    name: 'COM-Port',
  },
  {
    id: 2,
    url: '../assets/icons/wifi-icon.svg',
    name: 'Wi-Fi',
  },
  {
    id: 3,
    url: '../assets/icons/ethernet-icon.svg',
    name: 'Ethernet (опционально)',
  },
  {
    id: 4,
    url: '../assets/icons/4G-icon.svg',
    name: '4G (опционально)',
  },
  {
    id: 5,
    url: '../assets/icons/lora-icon.svg',
    name: 'LoRa (опционально)',
  },
]

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
  <div ref="rootRef" class="info-component">
    <div class="heading">
      <div class="name">
        ComboBox
      </div>
      <div class="description">
        Устройство, которое (добавить текст)
      </div>
    </div>

    <div class="image-container">
      <img class="image" src="../assets/device.png">
    </div>

    <div class="interfaces">
      <div class="text" :class="{ _fadeIn: fadeIn }">
        Интерфейсы, используемые <span class="combobox">ComboBox</span> для обмена данными:
      </div>
      <div class="list">
        <TheInterfaceItem v-for="(item, index) in itemsList" :key="item.id" :url="item.url" :name="item.name" :order="index" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '../styles/constants';

.info-component {
  margin: 0 auto;
  width: constants.$wdth-desktop;
  padding: 0 30px;
  flex: auto;

  .heading {
    display: flex;
    flex-direction: column;
    align-items: center;

    .name {
      font-size: 96px;
      font-weight: bold;
      letter-spacing: 5px;
    }

    .description {
      margin-top: 10px;
      font-size: constants.$fsz-h1;
      text-align: center;
    }
  }

  .image-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .interfaces {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    .text {
      opacity: 0;
      transform: translateY(100px);
      transition: transform 1s, opacity 1s;

      &._fadeIn {
        opacity: 1;
        transform: translateY(0px);
      }
    }

    .combobox{
      color: constants.$clr-links;
      font-size: 22px;
    }

    .list{
      margin: 50px 0;
      width: 100%;
      display: flex;
      justify-content: space-around;
    }
  }

  @media (max-width: constants.$bpt-xl) {
    width: constants.$wdth-tablet;
    font-size: constants.$fsz-tablet-text;
    padding: 0;

    .heading {
      .name {
        font-size: 50px;
      }

      .description {
        font-size: constants.$fsz-tablet-text;
      }
    }

    .image-container {
      margin: 30px 0;

      .image {
        width: 760px;
      }
    }

    .interfaces {
      .list {
        margin-bottom: 30px;
      }
    }
  }

  @media (max-width: constants.$bpt-md) {
    width: constants.$wdth-phone;
    padding: 0 10px;

    .heading {
      margin: 20px 0;

      .name {
        font-size: 50px;
      }

      .description {
        font-size: constants.$fsz-text;
      }
    }

  .image-container {
    margin: 30px 0;

    .image {
      max-width: 400px;
    }
  }

    .interfaces {
      .list {
        margin-bottom: 10px;
        width: 300px;
        flex-wrap: wrap;
        gap: 20px;
      }
    }
  }

}
</style>
