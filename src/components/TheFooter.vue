<script lang="ts" setup>
</script>

<template>
  <div class="footer-component">
    <div class="company">
      <span class="header">OneDevice</span>
      <span>Robotics Laboratory</span>
      <span>Финансовый университет при Правительстве Российской Федерации</span>
    </div>
    <div class="contacts">
      <span class="header">Контакты</span>
      <span>г. Москва,<br> 4-й Вешняковский пр., 4, стр. 3</span>
      <span>тел.: </span>
      <span>email: </span>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "../styles/constants";

.footer-component {
  margin: 0 auto;
  padding: 40px 20px;
  width: 1214px;
  height: 220px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(0deg, rgba(white, 0.5), rgba(white, 0.5)), linear-gradient(180deg, rgba(151, 71, 255, 0) 0%, rgba(151, 71, 255, 0.15) 100%);
  box-shadow: 1px 0 3px rgba(34, 197, 94, 0.15);
  font-size: 18px;

  .company{
    width: 400px;
    display: flex;
    flex-direction: column;
    gap: 8px;

    .header {
      font-weight: bold;
      font-size: 30px;
      letter-spacing: 3px;
    }
  }

  .contacts {
    width: 300px;
    display: flex;
    flex-direction: column;
    gap: 8px;

    .header {
      font-weight: bold;
      letter-spacing: 3px;
    }
  }

  @media (max-width: constants.$bpt-xl) {
    width: constants.$wdth-tablet;
    font-size: 15px;

    .company {
      width: 300px;

      .header {
        font-size: constants.$fsz-tablet-h1;
      }
    }

    .contacts {
      width: 250px;
    }
  }

  @media (max-width: constants.$bpt-md) {
    padding: 30px 10px;
    width: constants.$wdth-phone;
    height: 300px;
    flex-direction: column;
    align-items: center;
    font-size: 15px;
    box-shadow: none;

    .company {
      width: 350px;
      text-align: center;

      .header {
        font-size: 22px;
      }
    }

    .contacts {
      width: 350px;
      text-align: center;
    }
  }
}
</style>
