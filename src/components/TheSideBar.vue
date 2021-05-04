<template>
  <div
    v-if="$route.path !== '/'"
    class="container"
    :class="{ show: showSidebar }"
  >
    <div class="control">
      <font-awesome-icon
        class="control__icon"
        icon="angle-double-right"
        @click="showNav"
      />
    </div>
    <div class="navigation-icons">
      <router-link
        v-for="{ path, icon, type } in menu"
        :key="path"
        :to="path"
        exact
      >
        <font-awesome-icon
          :icon="[type, icon]"
          class="navigation-icons__nav-icon"
        />
      </router-link>
    </div>
    <div class="navigation-links">
      <transition-group name="fade">
        <router-link
          v-for="({ path, name }, id) in menu"
          :to="path"
          :key="id + 1"
          v-show="showLink"
          exact
          >{{ name }}</router-link
        >
        <!--        <router-link to="path" v-show="showLink" key="1" exact-->
        <!--          >Обо мне</router-link-->
        <!--        >-->
        <!--        <router-link to="/portfolio" v-show="showLink" key="2" exact-->
        <!--          >Портфолио</router-link-->
        <!--        >-->
        <!--        <router-link to="/skills" v-show="showLink" key="3" exact-->
        <!--          >Навыки</router-link-->
        <!--        >-->
        <!--        <router-link to="/contact" v-show="showLink" key="4" exact-->
        <!--          >Контакты</router-link-->
        <!--        >-->
        <!--                <router-link to="" v-show="showLink" key="5">FAQ</router-link>-->
      </transition-group>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      showSidebar: false,
      showLink: false,
      menu: [
        { name: "Обо мне", path: "/aboutme", icon: "home", type: "fas" },
        {
          name: "Портфолио",
          path: "/portfolio",
          icon: "camera-retro",
          type: "fas",
        },
        { name: "Навыки", path: "/skills", icon: "user-circle", type: "fas" },
        {
          name: "Контакты",
          path: "/contact",
          icon: "comment-dots",
          type: "fas",
        },
        { name: "FAQ", path: "/faq", icon: "info-circle", type: "fas" },
      ],
    };
  },
  methods: {
    showNav() {
      if (this.showSidebar) {
        this.showLink = false;
        setTimeout(() => {
          this.showSidebar = false;
        }, 500);
      } else {
        this.showSidebar = true;
        setTimeout(() => {
          this.showLink = true;
        }, 500);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Anton");
@import url("https://use.fontawesome.com/releases/v5.8.2/css/all.css");

.container {
  position: fixed;
  top: 20%;
  left: 0;
  width: 70px;
  padding: 10px;
  min-height: calc(100vh - 20%);
  background-color: transparent;
  border-width: 0 1px 0 0;
  z-index: 999;
  transition: all 0.5s ease-in-out;
  @media (max-width: 679px) {
    display: none;
  }

  .control {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    margin-bottom: 10px;

    &__icon {
      font-size: 2rem;
      cursor: pointer;
      color: rgba(38, 50, 56, 0.4);
      transition: all 0.5s ease-in-out;
    }
  }

  &.show {
    width: 100vw;

    .control__icon {
      color: #304ffe;
      transform: rotateZ(-180deg);
    }

    .navigation-icons {
      color: #304ffe;
    }
  }

  .navigation-icons {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 50px;
    float: left;

    svg {
      font-size: 3rem;
      padding: 10px 0;
      cursor: pointer;
      transition: all 0.5s ease-in-out;
      color: rgba(38, 50, 56, 0.4);
      &.active {
        color: #304ffe;
      }
      &:hover {
        color: #304ffe;
      }
    }
  }

  .navigation-links {
    padding-top: 12px;
    float: left;

    a {
      display: block;
      font-size: 1.35rem;
      padding-left: 10px;
      margin-bottom: 16px;
      cursor: pointer;
      color: #263238;
      &.active {
        color: #304ffe;
      }
      &:hover {
        color: #304ffe;
      }
    }
  }
}

@mixin nav-childs($values...) {
  @each $var in $values {
    &:nth-child(#{$var}) {
      transition: transform linear calc(0.1s * #{$var}), display 0.5s;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  @include nav-childs(1, 2, 3, 4, 5);
}

.fade-enter,
.fade-leave-to {
  transform: scale(0);
}
</style>
