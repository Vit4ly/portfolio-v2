<template>
  <div class="home">
    <div class="container">
      <transition name="fade">
        <div v-show="isVisible" class="home__inner">
          <div class="home__item">
            <h1 class="home__title">Frontend Developer</h1>
            <p class="home__text">
              Занимаюсь тем что нравится: пишу код, разрабатываю.
            </p>
            <div class="home__social">
              <a
                v-for="{ type, name, path } in getFilteredHomeSocial"
                :key="name"
                :href="path"
                target="_blank"
              >
                <font-awesome-icon
                  :icon="[type, name]"
                  class="home__social__icon"
                />
              </a>
            </div>
          </div>
        </div>
      </transition>

      <div class="home__link">
        <font-awesome-icon
          :icon="['fas', 'chevron-down']"
          class="home__link__arrow"
        />
        <button class="home__link__btn" @click="next">Дальше</button>
      </div>
    </div>
  </div>
  <div class="load" v-if="isLoad">
    <font-awesome-icon :icon="['fas', 'spinner']" class="load__icon" pulse />
  </div>
  <!-- SVG -->
  <svg width="0" height="0" class="hidden">
    <symbol
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      id="facebook_black_24dp (1)"
    >
      <path fill="none" d="M0 0h24v24H0z"></path>
      <path
        d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"
      ></path>
    </symbol>
  </svg>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Home",
  mounted() {
    this.visible();
  },
  data() {
    return {
      isLoad: false,
      isVisible: false,
    };
  },
  methods: {
    next() {
      this.isLoad = true;
      setTimeout(() => {
        this.$router.push("/aboutme");
        this.isLoad = false;
      }, 1000);
    },
    visible() {
      this.isVisible = !this.isVisible;
    },
  },
  computed: {
    ...mapGetters(["getFilteredHomeSocial"]),
  },
};
</script>

<style scoped lang="scss">
.load {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  &__icon {
    font-size: 6vw;
    color: rgba(48, 79, 254, 0.3);
  }
}

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
    grid-template-columns: repeat(5, 0.1fr);
    grid-gap: 1vw;

    &__icon {
      font-size: calc(14px + 1vw);
      color: #fff;
      transition: all linear 0.3s;

      &:hover {
        cursor: pointer;
        color: #304ffe;
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

      box-shadow: -5px -5px 5px -5px rgba(34, 60, 80, 0.6) inset;
      color: #ffffff;
      background-color: #304ffe;
      transition: all linear 0.3s;

      &:hover {
        background: rgb(29, 24, 121);
        background: linear-gradient(
          90deg,
          rgba(29, 24, 121, 1) 11%,
          rgba(61, 90, 254, 1) 85%,
          rgba(48, 79, 254, 1) 100%
        );
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
