<template>
  <keep-alive>
    <div class="inner" v-if="getImagesSkills.length">
      <div class="skills" v-if="!getError || getImagesSkills.length">
        <h1 class="skills__title">Навыки</h1>
        <div class="skills__inner">
          <app-card
            v-for="{ name, path, text } in getImagesSkills"
            :key="name"
            :name="name"
            :img="require(`../assets/skills/${path}.png`)"
            :text="text"
            @getModal="getModal"
            @click="isShownModal"
          ></app-card>
          <app-modal>
            <template #image><img :src="img" :alt="img" /></template>
            <template #name>{{ name }}</template>
            <template #text>{{ text }}</template>
          </app-modal>
        </div>
      </div>
      <div class="error" v-else>
        Что-то пошло не так! Попробуйте перезагрузить страницу.
      </div>
    </div>
    <div class="load" v-else>
      <font-awesome-icon class="load__icon" icon="spinner" pulse />
    </div>
  </keep-alive>
</template>

<script>
import AppCard from "@/components/AppCard";
import AppModal from "@/components/AppModal";
import { mapGetters, mapActions, mapMutations } from "vuex";
// import LazyLoad from "@/directives/LazyLoad";

export default {
  name: "Skills",
  data() {
    return {
      text: "",
      img: "",
      name: "",
    };
  },
  mounted() {
    this.requestImagesSkills();
  },
  methods: {
    ...mapMutations(["isShownModal"]),
    getModal(text, img, name) {
      this.text = text;
      this.img = img;
      this.name = name;
    },
    ...mapActions(["requestImagesSkills"]),
  },
  computed: {
    ...mapGetters(["getImagesSkills", "getError"]),
    currentUrl() {
      return require(`../assets/skills/${this.img}`);
    },
  },
  components: {
    AppCard,
    AppModal,
  },
  // directives: {
  //   LazyLoad
  // }
};
</script>

<style scoped lang="scss">
.load {
  position: fixed;
  top: 20%;
  left: 45%;
  &__icon {
    font-size: 50px;
    color: rgba(48, 79, 254, 0.1);
  }
}

.skills {
  &__title {
    font-size: calc(14px + 1.5vw);
    text-align: center;
    padding-bottom: 3vw;
  }

  &__inner {
    width: 70vw;
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(5, 0.3fr);
    grid-gap: 3vw;

    @media (max-width: 649px) {
      grid-template-columns: repeat(3, 0.3fr);
      width: 90vw;
    }
    @media (max-width: 375px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}
</style>
