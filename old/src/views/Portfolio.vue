<template>
  <div class="work">
    <h1 class="work__title">Портфолио</h1>

    <div class="work__inner">
      <app-carousel @next="btnNext" @prev="btnPrev">
        <app-carousel-slide
          class="carousel-slider"
          v-for="({ name, path }, idx) in getPortfolio"
          :key="name"
          :idx="idx"
          @click="setIdxSlide(idx)"
        >
          <img
            :src="require(`../assets/portfolio/${path}.png`)"
            :alt="name"
            class="work__img"
          />
        </app-carousel-slide>
      </app-carousel>
    </div>

    <hr />

    <div class="pagination">
      <ul class="pagination__list">
        <li
          class="pagination__list__item"
          v-for="(item, idx) in getPortfolio.length"
          :key="item"
          @click="setIdxSlide(idx)"
          :class="{ pagination__list__active: idx === getIdxSlide }"
        ></li>
      </ul>
    </div>

    <div class="work__info">
      <p class="work__text">{{ getCurrentSlide.text }}</p>
    </div>

    <div class="work__btn">
      <a :href="getCurrentSlide.ref" target="_blank" class="work__link"
        >Посмотреть проект</a
      >
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import AppCarousel from "@/components/AppCarousel";
import AppCarouselSlide from "@/components/AppCarouselSlide";

export default {
  name: "Work",
  methods: {
    ...mapMutations(["setIdxSlide", "btnNext", "btnPrev"]),
  },
  computed: {
    ...mapGetters(["getPortfolio", "getCurrentSlide", "getIdxSlide"]),
  },
  components: {
    AppCarousel,
    AppCarouselSlide,
  },
};
</script>

<style scoped lang="scss">
.pagination {
  max-width: 60vw;
  margin: 0 auto;

  &__list {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 -15px;

    &__item {
      padding: 2px 15px;
      cursor: pointer;

      &:after {
        content: "-";
        top: 0;
        left: 0;
        font-size: 25px;
        color: rgba(0, 0, 0, 0.1);
      }
    }

    &__active {
      color: #304ffe;
      font-weight: 500;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);

      &:after {
        content: "-";
        top: 0;
        left: 0;
        font-size: 25px;
        color: rgba(48, 79, 254, 1);
      }
    }
  }
}

.work {
  max-width: 800px;

  &__title {
    text-align: center;
    padding-bottom: 5vh;
  }

  &__info {
    padding-top: 10px;
    width: 80vw;
    max-width: 800px;
  }

  &__inner {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__btn {
    padding-top: 10px;
  }

  &__link {
    font-weight: 600;
    color: #263238;
    text-decoration: underline;
    transition: 0.3s;

    &:hover {
      color: #304ffe;
    }

    &:active {
      color: #304ffe;
    }

    &:visited {
      color: #304ffe;
    }
  }

  &__img {
    width: 100%;
    height: auto;
  }
}

.carousel-slider {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

.carousel-slider img {
  width: 100%;
  height: 100%;
}
</style>
