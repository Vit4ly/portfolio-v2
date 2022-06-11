<template>
  <div class="card">
    <img
      loading="lazy"
      :src="img"
      alt=""
      class="card__img"
      @click="$emit('getModal', text, img, name)"
    />
  </div>
</template>

<script>
export default {
  name: "AppCardSkills",
  emits: ["getModal"],
  props: {
    img: {
      type: String,
    },
    text: {
      type: String,
    },
    name: {
      type: String,
    },
  },
  // directives: {
  //   LazyLoad
  // }
};
</script>

<style scoped lang="scss">
.card {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 5px;
  box-shadow: 5px 5px 5px -5px rgba(34, 60, 80, 0.6);
  overflow: hidden;

  &__img {
    border-radius: 10px;
  }
}
</style>
