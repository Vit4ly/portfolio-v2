<script setup lang="ts">
import {useDataStore} from '../stores/Store';
import IconBase from '../components/Base/IconBase.vue'
import Loader from '../components/Base/Loader.vue'
import {onMounted, ref} from "vue";
import {useRouter} from "vue-router";

const router = useRouter()
const store = useDataStore()

const contacts = store.CONTACT_LIST
const isVisible = ref(false)
const isLoad = ref(false)

function next() {
  isLoad.value = true;
  setTimeout(() => {
    router.push("/about");
    isLoad.value = false;
  }, 1000);
}

function visible() {
  isVisible.value = !isVisible.value;
}

onMounted(() => {
  visible()
})

</script>

<template>
  <div class="home">
    <div class="container">
      <transition name="fade">
        <div v-show="isVisible" class="home__inner">
          <div class="home__item">
            <h1 class="home__title">Frontend Developer</h1>
            <div class="home__social">
              <a
                  v-for="{ name, path } in contacts"
                  :key="name"
                  :href="path"
                  target="_blank"
              >
                <IconBase :title="name" class="home__social__icon" width="25" height="25"/>
              </a>
            </div>
          </div>
        </div>
      </transition>

      <div class="home__link">
        <button class="home__link__btn" @click="next">Next</button>
      </div>
    </div>
  </div>

  <teleport to="body">
    <Loader v-if="isLoad"/>
  </teleport>
</template>

<style scoped lang="scss">
.home {
  background-image: url("../assets/bgnew.png");
  background-size: 50vw;
  background-repeat: no-repeat;
  background-position: right;
  background-color: #000000;
  padding-top: 30vh;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;

  @media (max-width: 1024px) {
    padding-top: 40vh;
  }
  @media (max-width: 414px) {
    padding-top: 20vh;
  }
  @media (max-height: 1024px) and (orientation: landscape) {
    padding-top: 35vh;
  }
  @media (max-height: 320px) and (orientation: landscape) {
    padding-top: 25vh;
  }

  &__inner {
    display: flex;
    align-items: center;
    width: 50vw;
    @media (max-width: 414px) {
      width: 70vw;
    }
    @media (max-width: 320px) {
      width: 75vw;
    }
  }

  &__item {
    color: #ffffff;
    position: relative;
    padding-left: 2vw;
  }

  &__title {
    font-size: calc(14px + 2vw);
    font-weight: 700;
  }

  &__text {
    font-size: calc(14px + 1vw);
    font-weight: 300;
  }

  &__social {
    margin-top: 20px;
    display: inline-grid;
    grid-template-columns: repeat(6, 0.1fr);
    grid-gap: 1vw;

    &__icon {
      font-size: calc(14px + 1vw);
      fill: #ffffff;
      transition: all linear 0.3s;

      &:hover {
        cursor: pointer;
      }
    }
  }

  &__link {
    margin-top: 15vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &__btn {
      padding: 5px 20px;
      border: 1px solid transparent;
      border-radius: 50px;

      color: #ffffff;
      background-color: #304ffe;
      transition: all linear 0.3s;

      &:hover {
        background: rgb(60, 87, 246);
      }
    }

    @media (max-height: 414px) and (orientation: landscape) {
      margin-top: -5vh;
    }
    @media (max-width: 414px) {
      margin-top: 40vh;
    }
    @media (max-height: 320px) and (orientation: landscape) {
      margin-top: -5vh;
    }

    &__arrow {
      position: relative;
      color: rgba(48, 79, 254, 1);
      font-size: calc(14px + 1vw);
      animation-name: arrow;
      animation-duration: 1s;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
      animation-direction: alternate;
    }

    @keyframes arrow {
      0% {
        bottom: 0;
      }
      30% {
        bottom: 1px;
      }
      50% {
        bottom: 2px;
      }
      70% {
        bottom: 3px;
      }
      100% {
        bottom: 5px;
      }
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
