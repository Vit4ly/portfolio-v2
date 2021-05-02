<template>
  <div class="home">
    <div class="container">
      <div class="home__inner">
        <div class="home__item">
          <h1 class="home__title">Frontend Developer</h1>
          <p class="home__text">
            Занимаюсь тем что нравится: пишу код, разрабатываю.
          </p>
          <div class="home__social">
            <i class="fab fa-telegram home__social__icon"></i>
            <i class="fab fa-facebook home__social__icon"></i>
            <i class="fab fa-instagram home__social__icon"></i>
            <i class="fab fa-github home__social__icon"></i>
            <i class="fas fa-envelope home__social__icon"></i>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- SVG -->
  <svg width="0" height="0" class="hidden">
    <symbol
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      id="facebook_black_24dp (1)"
    >
      <path fill="none" d="M0 0h24v24H0z"></path>
      <path
        d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"
      ></path>
    </symbol>
  </svg>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
.home {
  background-image: url("../assets/bgnew.png");
  background-size: 50vw;
  background-repeat: no-repeat;
  background-position: right;
  background-color: #000000;
  padding-top: 200px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  z-index: -500;

  &__inner {
    display: flex;
    align-items: center;
    width: 50vw;
    height: 40vh;
  }

  &__item {
    color: #ffffff;
    position: relative;
  }

  &__title {
    font-size: calc(14px + 2vw);
    font-weight: 700;
  }

  &__text {
    font-size: calc(14px + 1vw);
    font-weight: 300;
  }

  &__social {
    margin-top: 20px;
    display: inline-grid;
    grid-template-columns: repeat(5, 0.1fr);
    grid-gap: 1vw;
    transition: all linear 0.3s;

    &__icon {
      font-size: 2vw;

      &:hover {
        cursor: pointer;
        fill: #304ffe;
      }
    }
  }
}
</style>
