<script setup lang="ts">
import TheBurger from '../components/TheBurger.vue'
import IconBase from '../components/Base/IconBase.vue'
const show = false
</script>

<template>
  <header class="nav-bar" v-if="$route.path !== '/'">
    <div class="container">
      <div class="nav-bar__inner">
        <div class="nav-bar__logo">
          <router-link to="/" exact>
            <IconBase title="logo" width="150" height="70" class="logo"/>
          </router-link>
        </div>

        <div class="nav-bar__item">
          <nav class="nav-bar__contact">
            <router-link
                v-for="{ name, path } in getFilteredMenu"
                :key="path"
                :to="path"
                class="nav-bar__my-contact"
                :class="{ isActiveHome: $route.path === '/' }"
                exact
            >{{ name }}
            </router-link>
          </nav>
          <a
              href="mailto:vit4ly.kiselev@gmail.com"
              class="btn"
              :class="{ isActiveHome: $route.path === '/' }"
          >Связаться со мной</a
          >
        </div>
        <!--        burger-->
        <TheBurger/>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.logo {
  width: 150px;
  height: 70px;
  margin: 0.5em;
}

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
  background-color: #ffffff;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;

  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__logo {
    &.active {
      svg {
        fill: #fff;
      }
    }
  }

  &__img {
    width: 100%;
    height: auto;
    max-width: 180px;
  }

  &__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 678px) {
      display: none;
    }
  }

  &__contact {
    display: flex;
    justify-content: space-between;
    margin: 0 -15px;
  }

  &__my-contact {
    padding: 0 15px;
    font-size: 18px;
    font-weight: 500;
    color: #263238;
    transition: all 0.3s;

    &:hover {
      color: #304ffe;
    }

    &.active {
      border-bottom: 1px solid rgba(48, 79, 254, 0.3);
      color: #304ffe;
    }
  }


}
.btn {
  margin-left: 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 25px;
  padding: 6px 10px;
  font-weight: 500;
  color: #263238;
  transition: all linear 0.3s;
  box-shadow: -5px -5px 5px -5px rgba(34, 60, 80, 0.6) inset;

  &:hover {
    color: #fff;
    box-shadow: -4px -4px -4px -4px rgba(34, 60, 80, 0.6) inset;
    background: rgb(29, 24, 121);
    background: linear-gradient(
            90deg,
            rgba(29, 24, 121, 1) 11%,
            rgba(61, 90, 254, 1) 85%,
            rgba(48, 79, 254, 1) 100%
    );
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
