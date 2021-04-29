<template>
  <div class="container" :class="{ show: showSidebar }">
    <div class="control">
      <i class="fas fa-angle-double-right" @click="showNav"></i>
    </div>
    <div class="navigation-icons">
      <router-link to="/"><i class="fas fa-home"></i></router-link>
      <router-link to="/portfolio"
        ><i class="fas fa-camera-retro"></i
      ></router-link>
      <router-link to="/skills"><i class="fas fa-user-circle"></i></router-link>
      <router-link to="/contact"
        ><i class="fas fa-comment-dots"></i
      ></router-link>
      <i class="fas fa-info-circle"></i>
    </div>
    <div class="navigation-links">
      <transition-group name="fade">
        <router-link to="/" v-show="showLink" key="1">Home</router-link>
        <router-link to="/portfolio" v-show="showLink" key="2"
          >Portfolio</router-link
        >
        <router-link to="/skills" v-show="showLink" key="3">Skills</router-link>
        <router-link to="/contact" v-show="showLink" key="4"
          >Contact</router-link
        >
        <router-link to="" v-show="showLink" key="5">FAQ</router-link>
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
  position: absolute;
  top: 20%;
  left: 0;
  width: 70px;
  padding: 10px;
  min-height: calc(100vh - 20%);
  background-color: transparent;
  border-width: 0 1px 0 0;
  z-index: 999;
  transition: all 0.5s ease-in-out;

  .control {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    margin-bottom: 10px;

    i {
      font-size: 2rem;
      cursor: pointer;
      color: rgba(38, 50, 56, 0.4);
      transition: all 0.5s ease-in-out;
    }
  }
  &.show {
    width: 180px;
    .control > i {
      color: #ff4081;
      transform: rotateZ(-180deg);
    }
    .navigation-icons {
      color: #ff4081;
    }
  }
  .navigation-icons {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 50px;
    float: left;
    i {
      font-size: 2rem;
      padding: 10px 0;
      cursor: pointer;
      transition: all 0.5s ease-in-out;
      color: rgba(38, 50, 56, 0.4);
      &:hover {
        color: #ff4081;
      }
    }
  }
  .navigation-links {
    padding-top: 14px;
    float: left;
    a {
      display: block;
      font-size: 1.35rem;
      padding-left: 10px;
      margin-bottom: 18px;
      cursor: pointer;
      color: #263238;
      &:hover {
        color: #ff4081;
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
