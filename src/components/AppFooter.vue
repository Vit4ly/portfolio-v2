<template>
  <div class="footer">
    <div class="container">
      <div class="footer__wrapper">
        <div class="footer__contact">
          <font-awesome-icon icon="copyright" class="footer__contact__icon" />
          <p class="footer__contact__text">Виталий Киселев</p>
        </div>
        <div class="footer__social">
          <ul class="footer__social__list">
            <li
              v-for="{ path, type, name } in getFilteredHomeSocial"
              :key="path"
              class="footer__social__list__item"
            >
              <a :href="path" class="footer__social__link">
                <font-awesome-icon :icon="[type, name]" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "AppFooter",
  computed: {
    ...mapGetters(["getFilteredHomeSocial"]),
  },
};
</script>

<style scoped lang="scss">
.footer {
  padding: 30px 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  width: 100%;
  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 414px) {
      justify-content: center;
    }
  }

  &__contact {
    display: flex;
    font-size: calc(14px + 0.1vw);
    @media (max-width: 414px) {
      display: none;
    }

    &__icon {
      color: rgba(38, 50, 56, 0.1);
    }
    &__text {
      color: rgba(38, 50, 56, 0.5);
      font-weight: 600;
      //font-size: calc(14px + .1vw);
    }
  }

  &__social {
    &__list {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 -10px;
      &__item {
        padding: 0 10px;
        font-size: calc(14px + 0.8vw);
        a {
          transition: all 0.3s;
          color: rgba(38, 50, 56, 0.5);

          &:hover {
            color: rgba(38, 50, 56, 1);
          }
        }
      }
    }

    &__link {
    }
  }
}
</style>
