<script lang="ts" setup>
import { YandexMap, YandexMarker } from 'vue-yandex-maps'
import { ref, watch } from 'vue'
import { MAP_API } from '~/constants/MAP_API'

const settings = {
  apiKey: MAP_API,
  lang: 'ru_RU',
  coordorder: 'latlong',
  debug: false,
  version: '2.1',
}

const coordinates = [55.718354, 37.795654]

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
  <div ref="rootRef" class="contacts-component" :class="{ _fadeIn: fadeIn }">
    <div class="heading">
      <div class="text">
        Контакты
      </div>
    </div>

    <div class="main">
      <div class="contacts-list">
        <div class="contact">
          <img src="~/assets/icons/map-icon.svg?url">
          <span>г. Москва, 4-й Вешняковский пр. 4, стр. 3</span>
        </div>
        <div class="contact">
          <img src="~/assets/icons/phone-icon.svg?url">
          <span>8-800-2000-600</span>
        </div>
        <div class="contact">
          <img src="~/assets/icons/at-icon.svg?url">
          <span>mail@mail.ru</span>
        </div>
      </div>

      <div class="form" :class="{ _fadeIn: fadeIn }">
        <div class="form-text">
          Свяжитесь с нами, заполнив форму ниже
        </div>
        <div class="info">
          <div class="contacts">
            <input class="field" placeholder="имя">
            <input class="field" placeholder="email">
            <input class="field" placeholder="телефон">
          </div>
          <textarea class="message" placeholder="текст сообщения" />
        </div>
        <button class="btn">
          Отправить
        </button>
      </div>

      <div class="map-component">
        <YandexMap
          class="map"
          :settings="settings"
          :coordinates="[55.718694, 37.792950]"
          :zoom="17"
        >
          <YandexMarker :coordinates="coordinates" :marker-id="1" />
        </YandexMap>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '../styles/constants';

.contacts-component {
  margin: 100px auto 0 auto;
  width: 1214px;
  height: 700px;
  display: flex;
  flex-direction: column;
  gap: 50px;
  opacity: 0;
  transform: translateY(100px);
  transition: transform 1s, opacity 1s;

  &._fadeIn {
    opacity: 1;
    transform: translateY(0px);
  }

  .heading {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
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

  .contacts-list {
    display: flex;
    flex-direction: column;
    gap: 20px;

    .contact {
      display: flex;
      gap: 20px;
    }
  }

  .main {
    position: relative;

    .form {
      width: 838px;
      height: 393px;
      border-radius: constants.$cmn-border-radius;
      box-shadow: constants.$cmn-shadow-green;
      background-color: #fff;
      display: flex;
      flex-direction: column;
      gap: 20px;
      padding: 30px;
      z-index: 3;
      position: relative;
      margin-top: 20px;
      opacity: 0;
      transform: translateY(100px);
      transition: transform 1s, opacity 1s;

      &._fadeIn {
        opacity: 1;
        transform: translateY(0px);
      }

      .form-text {
        width: 300px;
        font-weight: bold;
        line-height: 40px;
        letter-spacing: 2px;
      }

      .info {
        display: flex;
        gap: 25px;

        .contacts {
          display: flex;
          flex-direction: column;
          gap: 25px;

          .field {
            width: 385px;
            height: 40px;
            border-radius: 8px;
            border: 1px solid rgba(#64748B, 0.2);
            padding-left: 10px;
            letter-spacing: 1.2px;
            outline: none;
            font-size: 15px;
            font-family: 'Jura', sans-serif;

            &:focus {
              border: 1px solid constants.$clr-border;
              box-shadow: constants.$cmn-shadow-element;
            }
          }
        }

        .message {
          width: 388px;
          height: 173px;
          border-radius: 8px;
          border: 1px solid rgba(#64748B, 0.2);
          padding: 10px 0 0 10px;
          font-family: 'Jura', sans-serif;
          letter-spacing: 1.2px;
          font-size: 15px;
          outline: none;

          &:focus {
            border: 1px solid constants.$clr-border;
            box-shadow: constants.$cmn-shadow-element;
          }
        }
      }

      .btn {
        width: 170px;
        height: 40px;
        align-self: flex-end;
        border-radius: 8px;
        border: 1px solid rgba(#64748B, 0.2);
        font-size: 15px;
        font-family: 'Jura', sans-serif;
        letter-spacing: 1.1px;

        &:hover {
          cursor: pointer;
          box-shadow: constants.$cmn-shadow-element;
        }
      }
    }

    .map-component {
      position: absolute;
      right: 0;
      top: -45px;
      width: 798px;
      height: 660px;

      .map {
        width: 100%;
        height: 100%;
        z-index: 1;
      }

      &::before {
        content: '';
        box-sizing: border-box;
        z-index: 2;
        position: absolute;
        height: 100%;
        border: 330px solid #fff;
        border-bottom-color: transparent;
        border-right-color: transparent;
        transform: scaleX(0.9);
        transform-origin: left;
        pointer-events: none;
      }
    }
  }

  @media (max-width: constants.$bpt-xl) {
    width: constants.$wdth-tablet;
    font-size: constants.$fsz-tablet-text;
    height: 466px;
    margin-top: 50px;

    .main {
      .contacts-list {
        position: absolute;
        z-index: 4;
      }

      .form {
        width: 532px;
        height: 250px;
        gap: 15px;
        padding: 10px;
        top: 120px;

        .form-text {
          width: 500px;
          font-size: constants.$fsz-tablet-text;
        }

        .info {
          .contacts {
            gap: 15px;

            .field {
              width: 200px;
              height: 30px;
              font-size: 13px;
            }
          }

          .message {
            width: 260px;
            height: 130px;
            font-size: 13px;
          }
        }

        .btn {
          margin-right: 22px;
        }
      }

      .map-component {
        width: constants.$wdth-tablet;
        height: 460px;

        .map {
          width: constants.$wdth-tablet;
          height: 460px;
        }

        &::before {
          border: 230px solid #fff;
          border-bottom-color: transparent;
          border-right-color: transparent;
          transform: scaleX(1.4);
        }
      }
    }
  }

  @media (max-width: constants.$bpt-md) {
    width: constants.$wdth-phone;
    font-size: 15px;
    gap: 20px;
    margin: 50px auto 120px auto;

    .heading {

      .text {
        font-size: constants.$fsz-text;
      }

      &::after {
        flex: 1;
      }
    }

    .main {
      .contacts-list {
        position: relative;
        z-index: 4;
        width: 200px;
        gap: 10px;
      }

      .form {
        padding: 10px;
        top: 100px;
        width: 400px;
        height: auto;
        box-shadow: none;
        gap: 20px;
        align-items: center;

        .form-text {
          padding: 0;
          width: 350px;
          text-align: center;
        }

        .info {
          flex-direction: column;
        }
      }

      .map-component {
        top: 0;
        width: 400px;
        height: 300px;

        .map {
          width: 400px;
          height: 250px;
        }

        &::before {
          transform: scaleX(0.4);
        }
      }
  }
  }
}
</style>

<style lang="scss">
  .ymaps-2-1-79-map-copyrights-promo {
    display: none;
  }
</style>
