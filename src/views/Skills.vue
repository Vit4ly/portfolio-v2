<template>
  <div class="skills">
    <div class="skills__card">
      <img src="../assets/skills/html.png" alt="" class="skills__img" />
    </div>
    <div class="skills__card">
      <img src="../assets/skills/css.png" alt="" class="skills__img" />
    </div>
    <div class="skills__card">
      <img src="../assets/skills/scss.png" alt="" class="skills__img" />
    </div>
    <div class="skills__card">
      <img
        src="../assets/skills/materializecss.png"
        alt=""
        class="skills__img"
      />
    </div>
    <div class="skills__card">
      <img src="../assets/skills/bootstrap.png" alt="" class="skills__img" />
    </div>
    <div class="skills__card">
      <img src="../assets/skills/tailwind.png" alt="" class="skills__img" />
    </div>
    <div class="skills__card">
      <img src="../assets/skills/js.png" alt="" class="skills__img" />
    </div>
    <div class="skills__card">
      <img src="../assets/skills/vue.png" alt="" class="skills__img" />
    </div>
    <div class="skills__card">
      <img src="../assets/skills/node.png" alt="" class="skills__img" />
    </div>
    <div class="skills__card">
      <img src="../assets/skills/webpack.png" alt="" class="skills__img" />
    </div>
    <div class="skills__card">
      <img src="../assets/skills/npm.png" alt="" class="skills__img" />
    </div>
    <div class="skills__card">
      <img src="../assets/skills/yarn.png" alt="" class="skills__img" />
    </div>
    <div class="skills__card">
      <img src="../assets/skills/webstorm.png" alt="" class="skills__img" />
    </div>
    <div class="skills__card">
      <img src="../assets/skills/vscode.png" alt="" class="skills__img" />
    </div>
    <div class="skills__card">
      <img src="../assets/skills/git.png" alt="" class="skills__img" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Skills",
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
.skills {
  display: grid;
  grid-template-columns: repeat(5, 0.3fr);
  grid-gap: 2vw;

  &__card {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 5px;
    //box-shadow: 5px 5px 5px -5px rgba(34, 60, 80, 0.6);
  }

  &__img {
    border-radius: 10px;
  }
}
</style>
