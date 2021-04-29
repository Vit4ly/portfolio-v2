<template>
  <the-nav-bar></the-nav-bar>
  <the-side-bar></the-side-bar>
  <div class="container">
    <div class="screen">
      <router-view />
    </div>
  </div>
</template>

<script>
import TheNavBar from "@/components/TheNavBar";
import TheSideBar from "@/components/TheSideBar";

export default {
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
  padding: 50px 0;
}
</style>
