<template>
  <div class="skills">
    <!--    <div v-for="{ name, path } in imgSkills" :key="name" class="skills__card">-->
    <!--      <img :src="require(`../assets/skills/${path}.png`)" alt="" class="skills__img" />-->
    <!--    </div>-->

    <app-card-skills
      v-for="{ name, path } in getImagesSkills"
      :key="name"
      :img="path"
    ></app-card-skills>
  </div>
</template>

<script>
import AppCardSkills from "@/components/AppCardSkills";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Skills",
  data() {
    return {};
  },
  mounted() {
    this.requestImagesSkills();
  },
  methods: {
    ...mapActions(["requestImagesSkills"]),
  },
  computed: {
    ...mapGetters(["getImagesSkills"]),
  },
  components: {
    AppCardSkills,
  },
};
</script>

<style scoped lang="scss">
.skills {
  display: grid;
  grid-template-columns: repeat(5, 0.3fr);
  grid-gap: 2vw;

  //&__card {
  //  display: flex;
  //  align-items: center;
  //  justify-content: center;
  //  border: 1px solid rgba(0, 0, 0, 0.1);
  //  border-radius: 10px;
  //  padding: 5px;
  //  //box-shadow: 5px 5px 5px -5px rgba(34, 60, 80, 0.6);
  //}
  //
  //&__img {
  //  border-radius: 10px;
  //}
}
</style>
