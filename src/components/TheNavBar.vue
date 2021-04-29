<template>
  <div class="container">
    <header class="nav-bar">
      <div class="nav-bar__logo">
        <img class="nav-bar__img" src="../assets/logo2.png" alt="" />
      </div>
      <nav class="nav-bar__contact">
        <router-link to="/" class="nav-bar__my-contact">Home</router-link>
        <router-link to="/contacts" class="nav-bar__my-contact"
          >Contact</router-link
        >
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: "TheNavBar",
};
</script>

<style scoped lang="scss">
.nav-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  //border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  &__logo {
  }

  &__img {
    width: 100%;
    height: auto;
    max-width: 180px;
  }

  &__contact {
    display: flex;
    justify-content: space-between;
    margin: 0 -15px;
  }

  &__my-contact {
    padding: 0 15px;
    //text-decoration: none;
    font-size: 18px;
    font-weight: 200;
    color: #263238;
    transition: all 0.3s;

    &:hover {
      color: #ff4081;
    }
  }
}
</style>
