<template>
  <div class="carousel">
    <slot />
    <button class="btn carousel__next" @click.prevent="$emit('next')">
      <font-awesome-icon icon="chevron-right" />
    </button>
    <button class="btn carousel__prev" @click.prevent="$emit('prev')">
      <font-awesome-icon icon="chevron-left" />
    </button>
  </div>
</template>

<script>
export default {
  name: "AppCarousel",
  emits: ["next", "prev"],
};
</script>

<style scoped lang="scss">
.carousel {
  position: relative;
  overflow: hidden;
  max-width: 800px;
  width: 80vw;
  height: 60vh;
  z-index: 10;
  @media (max-width: 1024px) {
    //width: 90vw;
    height: 40vh;
  }
  @media (max-width: 679px) {
    width: 90vw;
    height: 25vh;
  }
  @media (orientation: landscape) {
    width: 70vw;
    height: 70vh;
  }

  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px 10px;
    background-color: rgba(0, 0, 0, 0.5);
    border: 1px solid transparent;
    margin: 5px 10px;
    color: #fff;
    font-size: calc(14px + 1vw);
    height: 50px;
    width: 50px;
    position: absolute;
    z-index: 2;

    &:hover {
      cursor: pointer;
    }

    &:focus {
      outline: none;
    }
  }

  &__next {
    top: 45%;
    right: 0;
  }

  &__prev {
    top: 45%;
    left: 0;
  }
}
</style>
