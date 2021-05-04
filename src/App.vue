<template>
  <the-side-bar></the-side-bar>

  <the-nav-bar></the-nav-bar>
  <div class="screen">
    <router-view />
  </div>
  <app-modal></app-modal>
</template>

<script>
import TheNavBar from "@/components/TheNavBar";
import TheSideBar from "@/components/TheSideBar";
import AppModal from "@/components/AppModal";

export default {
  components: {
    TheNavBar,
    TheSideBar,
    AppModal,
  },
};
</script>

<style lang="scss">
.screen {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 70px 0 20px 100px;
  //z-index: -500;
  @media (max-width: 679px) {
    padding: 100px 0 50px 0;
  }
}
</style>
