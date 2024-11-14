<script lang="ts" setup>
</script>

<template>
  <div class="header-component">
    <div class="logo">
      <img class="logo-image" src="src/assets/logo/one-device-logo.svg?url">
    </div>

    <div class="menu-list">
      <div class="link">
        <a href="#header">Об устройстве</a>
      </div>
      <div class="link">
        <a href="#description">Преимущества</a>
      </div>
      <div class="link">
        <a href="#contacts">Контакты</a>
      </div>
    </div>

    <div class="menu-icon">
      <img class="icon" src="src/assets/icons/menu-icon.svg?url">
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '../styles/constants';

.header-component {
  margin: 0 auto;
  width: constants.$wdth-desktop;
  height: 100px;
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  background-color: constants.$clr-background;
  font-size: constants.$fsz-h3;

  .logo {
    display: flex;
    align-items: center;
  }

  .menu-list {
    display: flex;
    align-items: center;
    gap: 20px;

    .link {
      &:hover {
        cursor: pointer;
        color: constants.$clr-links;
      }
    }
  }

  .menu-icon {
    display: none;
  }

  @media (max-width: constants.$bpt-xl) {
    width: constants.$wdth-tablet;
    height: 80px;
    padding: 0;

    .logo {
      .logo-image {
        width: 80px;
      }
    }
  }

  @media (max-width: constants.$bpt-md) {
    width: constants.$wdth-phone;
    height: 50px;
    margin: 0 auto;
    padding: 20px;

    .logo {
      .logo-image{
        width: 70px;
      }
    }

    .menu-list {
      display: none;
    }

    .menu-icon {
      display: flex;
      align-items: center;

      .icon {
        width: 30px;
      }
    }
  }
}
</style>
