import { createStore } from "vuex";

export default createStore({
  state: {
    isShow: false,
    error: String,
    imagesSkills: [],
    social: [
      {
        path: "tel:+79052066661",
        text: "+7(905)2066661",
        type: "fas",
        name: "mobile-alt",
      },
      {
        path: "mailto:vit4ly.kiselev@gmail.com",
        text: "Vit4ly.kiselev@gmail.com",
        type: "fas",
        name: "envelope",
      },
      {
        path: "skype:live:.cid.5ab92a5ce4ae2837",
        text: "Связаться в Skype",
        type: "fab",
        name: "skype",
      },
      {
        type: "fab",
        name: "telegram",
        path: "tg://resolve?domain=Vit4lyKiselev",
        text: "Написать в Telegram",
      },
      {
        type: "fab",
        name: "facebook",
        path: "https://www.facebook.com/profile.php?id=100001902067616",
        text: "Написать в Facebook",
      },
      {
        type: "fab",
        name: "instagram",
        path: "https://www.instagram.com/vitos03/",
        text: "О себе в картинках",
      },
      {
        type: "fab",
        name: "github",
        path: "https://github.com/Vit4ly",
        text: "Здесь можно посмотреть на код",
      },
      {
        type: "fas",
        name: "file-pdf",
        path: "https://spb.hh.ru/resume/7990fdbeff08270bff0039ed1f555457674361",
        text: "CV на сайте HH",
      },
    ],
    menu: [
      { name: "Обо мне", path: "/aboutme" },
      { name: "Портфолио", path: "/portfolio" },
      { name: "Навыки", path: "/skills" },
      { name: "Контакты", path: "/contact" },
      { name: "FAQ", path: "/faq" },
    ],
  },
  mutations: {
    isShown(state) {
      state.isShow = !state.isShow;
    },
    // eventClick(state, event) {
    //     console.log(event.target.parentNode)
    //     let eve = event.target.parentNode.className
    //     if(eve !== 'container' || eve.length === 0) {
    //        state.isShow = false
    //     }
    // }
  },
  getters: {
    getImagesSkills(state) {
      return state.imagesSkills;
    },
    getSocial(state) {
      return state.social;
    },
    getFilteredHomeSocial(state) {
      return state.social.filter(({ type }) => type === "fab");
    },
    getMenu(state) {
      return state.menu;
    },
    getFilteredMenu(state) {
      return state.menu.filter(
        ({ path }) => path === "/aboutme" || path === "/portfolio"
      );
    },
    getIsShown(state) {
      return state.isShow;
    },
  },
  actions: {
    async requestImagesSkills(context) {
      try {
        const response = await fetch(
          "https://vitaliy-kiselev-portfolio-default-rtdb.firebaseio.com/skillsImages.json"
        );
        context.state.imagesSkills = await response.json();
      } catch (e) {
        context.state.error = e;
      }
    },
  },
  modules: {},
});
