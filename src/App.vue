<script lang="ts" setup>
import TheHeader from '~/components/TheHeader.vue'
import TheInfo from '~/components/TheInfo.vue'
import TheDescription from '~/components/TheDescription.vue'
import TheContacts from '~/components/TheContacts.vue'
import TheFooter from '~/components/TheFooter.vue'
</script>

<template>
  <div class="app-component">
    <TheHeader />
    <TheInfo id="header" />
    <TheDescription id="description" />
    <TheContacts id="contacts" />
    <TheFooter />
  </div>
</template>

<style lang="scss" scoped>
@use 'styles/constants';

.app-component {
  width: 100%;
  color: constants.$clr-text;
  font-size: constants.$fsz-text;
}
</style>

<style lang="scss">
@import 'styles/globals';
@import 'styles/fonts';

:root {
  --color-primary: #fff;
}

#app {
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
}
</style>
