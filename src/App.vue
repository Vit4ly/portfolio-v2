<template>
  <the-side-bar @click="eventClickClose"></the-side-bar>
  <the-nav-bar></the-nav-bar>
  <div class="screen" @click="eventClickClose">
    <router-view />
  </div>
</template>

<script>
import TheNavBar from "@/components/TheNavBar";
import TheSideBar from "@/components/TheSideBar";
import { mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations(["eventClickClose"]),
  },
  components: {
    TheNavBar,
    TheSideBar,
  },
};
</script>

<style lang="scss">
.screen {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 0 20px 100px;

  @media (max-width: 679px) {
    padding: 100px 0 50px 0;
  }
}
</style>
