<template>
  <transition name="modal">
    <div class="modal" v-if="getIsShown">
      <div class="modal__inner">
        <div class="modal__card">
          <font-awesome-icon
            icon="times"
            class="modal__icon"
            @click="isShown"
          />
          <div class="modal__card__image-inner">
            <div class="modal__img">
              <slot name="image" />
            </div>
          </div>
          <div class="modal__card__item">
            <h3 class="modal__card__item__title"><slot name="name" /></h3>
            <p class="modal__card__item__text"><slot name="text" /></p>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "AppModal",
  methods: {
    ...mapMutations(["isShown"]),
  },
  computed: {
    ...mapGetters(["getIsShown"]),
  },
};
</script>

<style scoped lang="scss">
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;

  &__icon {
    color: #263238;
    position: absolute;
    right: 10px;
    top: 10px;
  }

  &__inner {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__image-inner {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__img {
    padding: 30px;
    width: 100%;
    height: auto;
  }

  &__card {
    position: relative;
    margin-top: 30vh;
    max-width: 40vw;
    display: grid;
    grid-template-columns: 0.6fr 1fr;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    box-shadow: 5px 5px 5px -5px rgba(34, 60, 80, 0.6);
    @media (max-width: 679px) {
      max-width: 80vw;
    }
    @media (orientation: landscape) {
      margin-top: 15vh;
    }

    &__item {
      padding: 20px;

      &__title {
        text-align: center;
        text-transform: uppercase;
        font-size: calc(14px + 0.5vw);
      }
      &__text {
      }
    }
  }
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.5s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>
