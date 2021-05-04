<template>
  <div class="modal" v-if="isShow" @click="isShown">
    <div class="modal__inner">
      <div class="modal__card">
        <font-awesome-icon icon="times" class="modal__icon" @click="isShown" />
        <div class="modal__card__image-inner">
          <img src="../assets/skills/html.png" class="modal__img" alt="" />
        </div>
        <div class="modal__card__item">
          <h3 class="modal__card__item__title">HTML</h3>
          <p class="modal__card__item__text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            accusantium eveniet iusto maiores natus ullam voluptatum. A aperiam
            asperiores autem beatae blanditiis cumque dolorem ea eaque, enim,
            eos eum exercitationem ipsam molestias mollitia nam nobis nulla
            officia perferendis porro quam, quia reprehenderit sunt tenetur
            totam unde ut vel voluptate voluptatem!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppModal",
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    isShown() {
      this.isShow = !this.isShow;
    },
  },
};
</script>

<style scoped lang="scss">
.modal {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 2000;

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
    width: 100%;
    height: auto;
  }

  &__card {
    position: relative;
    margin-top: 30vh;
    width: 40vw;
    display: grid;
    grid-template-columns: 0.6fr 1fr;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 20px;

    &__item {
      padding: 20px;

      &__title {
      }

      &__text {
      }
    }
  }
}
</style>
