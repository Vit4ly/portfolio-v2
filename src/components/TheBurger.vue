<template>
  <div class="nav-bar__menu">
    <transition name="fade" mode="out-in">
      <div class="nav-bar__burger">
        <div class="icon-inner" v-if="!getIsShown">
          <svg @click="navbarShow" key="menu" class="icon-menu">
            <use xlink:href="#menu"></use>
          </svg>
        </div>

        <svg v-else @click="navbarShow" class="icon-close">
          <use xlink:href="#close"></use>
        </svg>
      </div>
    </transition>
  </div>
  <transition name="fade">
    <ul v-if="getIsShown" class="nav-bar__list">
      <li
          v-for="{ name, path } in getMenu"
          :key="path"
          class="nav-bar__list__item"
      >
        <router-link :to="path" class="nav-bar__list__link" exact>
          {{ name }}
        </router-link>
      </li>
    </ul>
  </transition>
</template>

<script setup lang="ts">
import IconBase from '../components/Base/IconBase.vue'
</script>

<style scoped lang="scss">
.icon-close {
  margin: 0.5em;
}

.icon-menu {
  margin: 0.1em 0.3em;
}

.icon-close,
.icon-menu {
  width: 50px;
  height: 40px;
  cursor: pointer;
  transition: all 0.3s;
  fill: rgba(0, 0, 0, 0.5);
}

.icon-inner {
  display: flex;
  justify-content: center;
  align-items: center;
}
.nav-bar {
  &__menu {
    @media (min-width: 679px) {
      display: none;
    }
  }

  &__burger {
  }

  &__list {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    padding: 0;
    position: absolute;
    top: 80px;
    left: 0;
    height: 35vh;
    width: 100%;
    background: rgba(255, 255, 255, 0.9);
    @media (orientation: landscape) {
      height: 60vh;
    }
    @media (min-width: 679px) {
      display: none;
    }
    &__item {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: calc(14px + 1vw);
      font-weight: 500;
      padding: 1.7vh;
      cursor: pointer;
      //text-transform: uppercase;
      //transition: all .1s ease;

      &:hover {
        width: 100%;
        background-color: rgba(0, 0, 0, 0.1);
        color: #304ffe;
      }
    }

    &__link {
      color: #263238;

      &:hover {
        color: #304ffe;
      }

      &.active {
        color: #304ffe;
        text-decoration: underline;
      }
    }
  }
}

.isActiveHome {
  color: #fff;
  fill: #ffffff;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

</style>
