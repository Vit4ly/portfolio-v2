<template>
  <div class="skills">
    <keep-alive>
      <app-card-skills
        v-for="{ name, path } in getImagesSkills"
        :key="name"
        :img="path"
      ></app-card-skills>
    </keep-alive>
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
  max-width: 70vw;
  //max-height: 50vh;
  display: grid;
  grid-template-columns: repeat(5, 0.3fr);
  grid-gap: 3vw;
}
</style>
