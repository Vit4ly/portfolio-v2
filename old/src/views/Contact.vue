<template>
  <div class="contact">
    <h1 class="contact__title">Контакты</h1>
    <div class="contact__card">
      <div class="contact__item">
        <p class="contact__item__name">
          <font-awesome-icon class="contact__item__icon" icon="user" />
        </p>
        <p class="contact__item__text">Киселев Виталий Сергеевич</p>
      </div>
      <div
        class="contact__item"
        v-for="{ path, text, type, name } in getSocial"
        :key="path"
      >
        <p class="contact__item__name">
          <font-awesome-icon :icon="[type, name]" class="contact__item__icon" />
        </p>
        <p class="contact__item__text">
          <a :href="path" target="_blank">{{ text }}</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Contacts",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getSocial"]),
  },
};
</script>

<style scoped lang="scss">
.contact {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  &__title {
    margin-bottom: 10vh;
  }

  &__item {
    display: grid;
    grid-gap: calc(20px + 1vw);
    grid-template-columns: 0.3fr 1fr;
    align-items: center;
    justify-content: center;
    padding-bottom: 15px;

    &__name {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &__icon {
      font-size: calc(14px + 1vw);
      color: #263238;
      align-content: center;
    }

    &__text > a {
      color: #263238;
    }

    &__text {
      font-size: calc(14px + 0.3vw);
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      width: 100%;
    }
  }
}
</style>
