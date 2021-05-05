<template>
  <keep-alive>
    <div class="skills">
      <app-card-skills
        v-for="{ name, path, text } in getImagesSkills"
        :key="name"
        :name="name"
        :img="path"
        :text="text"
        @getModal="getModal"
        @click="isShown"
      ></app-card-skills>
      <app-modal>
        <template #image
          ><img :src="require(`../assets/skills/${img}.png`)" :alt="img"
        /></template>
        <template #name>{{ name }}</template>
        <template #text>{{ text }}</template>
      </app-modal>
    </div>
  </keep-alive>
</template>

<script>
import AppCardSkills from "@/components/AppCardSkills";
import AppModal from "@/components/AppModal";
import { mapGetters, mapActions, mapMutations } from "vuex";

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
    ...mapMutations(["isShown"]),
    getModal(text, img, name) {
      this.text = text;
      this.img = img;
      this.name = name;
    },
    ...mapActions(["requestImagesSkills"]),
  },
  computed: {
    ...mapGetters(["getImagesSkills"]),
  },
  components: {
    AppCardSkills,
    AppModal,
  },
};
</script>

<style scoped lang="scss">
.skills {
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
</style>
