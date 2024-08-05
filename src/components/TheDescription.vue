<script lang="ts" setup>
import { ref, watch, watchEffect } from 'vue'
import TheDescriptionItem from '~/components/TheDescriptionItem.vue'

const advantages = Array.from({ length: 5 }).map((_, i) => ({
  url: new URL(`../assets/images/image${i + 1}.png`, import.meta.url).href,
}))
</script>

<template>
  <div class="description-component">
    <div class="heading">
      <div ref="rootRef" class="text">
        Преимущества
      </div>
    </div>
    <TheDescriptionItem
      v-for="(advantage, index) in advantages"
      :key="advantage.url"
      class="description-item"
      :url="advantage.url"
      :reverse="Boolean(index % 2)"
    />
  </div>
</template>

<style scoped lang="scss">
@use '../styles/constants';

.description-component{
  margin: 0 auto;
  width: constants.$wdth-desktop;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 150px;

    .heading {
      margin-top: 40px;
      flex: auto;
      display: flex;
      align-items: flex-end;
      gap: 20px;

      &::before, &::after {
        content: '';
        display: inline-block;
        flex: 1;
        height: 2px;
        background-color: constants.$clr-border;
      }

      &::after {
        flex: 4;
      }

      .text {
        font-size: constants.$fsz-h1;
      }
    }

  .description-item {
    flex: auto;
    align-self: center;
  }

  @media (max-width: constants.$bpt-xl) {
    width: constants.$wdth-tablet;
    gap: 50px;

    .heading {
      .text {
        font-size: constants.$fsz-tablet-h1;
      }
    }

  }

  @media (max-width: constants.$bpt-md) {
    width: 380px;
    gap: 40px;

    .heading {

      .text {
        font-size: constants.$fsz-text;
      }

      &::after {
        flex: 1;
      }
    }

    .description-item {
      box-shadow: constants.$cmn-shadow-green;
    }
  }
}
</style>
