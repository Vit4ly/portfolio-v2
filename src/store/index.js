import { createStore } from "vuex";

export default createStore({
  state: {
    isShow: false,
    isShowModal: false,
    error: "",
    indexSlide: 0,
    sliderDirection: "",
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
        path: "tg://resolve?domain=@Vit4liyKiselev",
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
        name: "linkedin",
        path: "https://www.linkedin.com/in/vitaliy-kiselev/",
        text: "Написать в LinkedIn",
      },

      {
        type: "fab",
        name: "instagram",
        path: "https://www.instagram.com/vitos03/",
        text: "Instagram",
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
    ],
    portfolio: [
      {
        name: "city",
        path: "city",
        text:
          "Принял участие в фриланс проекте (аналог игры манаполия), в мои задачи входила верстка по макету в Figma и реализация личного кабинета пользователя. В проекте использовался HTML, CSS, VueJs",
        ref: "https://github.com/Vit4ly/CityCash",
      },
      {
        name: "databaseVue3",
        path: "DataBaseVue3",
        text:
          "Реализация работы с базой данных и создания нового пользователя с возможностью добавления и удаления на сервере. В качестве инструментов VueJS3, в качестве базы данных FireBase",
        ref: "https://vue3-data-base-http.web.app/",
      },
      {
        name: "form",
        path: "form",
        text:
          "Реализация формы регистрации на Vue Js c дополнительной валидацией c Vuelidate ",
        ref: "https://vit4ly.github.io/form-medods/",
      },
      {
        name: "JSBuilder",
        path: "JSBuilder",
        text:
          "Данный конструктор сайтов реализован в процессе прохождения курса, c применением принципов SOLID, OOP на чистом JS",
        ref: "https://pure-javascript-constructor.web.app/",
      },
      {
        name: "lazyLoad",
        path: "lazyloadjs",
        text:
          "В данном проекте реализовал Lazy Load картинок загруженных с сервера и добавил возможность подгрузки дополнительных изображений по нажатию на кнопку. В качестве инструментов JS, Parcel, ,база данных и хостинг FireBase",
        ref: "https://lucky-group-test.web.app/",
      },
      {
        name: "resume",
        path: "resume",
        text: "Реализация проекта для создания резюме на VueJs",
        ref: "https://vue-resume-9ec6c.web.app/",
      },
      {
        name: "shop",
        path: "tgp",
        text:
          "Данный проект был реализован в качестве тестового, из инструментов HTML,CSS,JS,VueJS, Vuex, Vue-router",
        ref: "https://tages-gamp-test.web.app/",
      },
      {
        name: "TodoJS",
        path: "TodoJS",
        text: "Стандартный ToDo на HTML,CSS,JS и немного анимации.",
        ref: "https://vit4ly.github.io/todo-Js-2/",
      },
      {
        name: "Yebo",
        path: "Yebo",
        text:
          "Данный landing page реализовал в качестве прктики работы с Grid.",
        ref: "https://vit4ly.github.io/yebo-bike/",
      },
      {
        name: "resume",
        path: "resume-v1",
        text: "Это первый сайт портфолио.",
        ref: "https://vit4ly.github.io/Portfolio/",
      },
      {
        name: "drag-n-drop",
        path: "drag-n-drop",
        text: "Реализация Drag-n-drop на чистом JS",
        ref: "https://vit4ly.github.io/drag-n-drop/",
      },
      {
        name: "Slid-card",
        path: "slide-card",
        text: "Реализация слайдера на чистом JS",
        ref: "https://vit4ly.github.io/01-cards-sources/",
      },
    ],
  },
  mutations: {
    isShown(state) {
      state.isShow = !state.isShow;
    },
    isShownModal(state) {
      state.isShowModal = !state.isShowModal;
    },
    setIdxSlide(state, idx) {
      state.indexSlide = idx;
    },
    btnNext(state) {
      state.indexSlide++;
      if (state.indexSlide >= state.portfolio.length) {
        state.indexSlide = 0;
      }
      state.sliderDirection = "slide-right";
    },
    btnPrev(state) {
      state.indexSlide--;
      if (state.indexSlide < 0) {
        state.indexSlide = state.portfolio.length - 1;
      }
      state.sliderDirection = "slide-left";
    },
    eventClickClose(state, event) {
      if (event.target.className !== "nav-bar__inner") {
        state.isShow = false;
      }
    },
    navbarShow(state) {
      state.isShow = !state.isShow;
    },
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
    getIsShownModal(state) {
      return state.isShowModal;
    },
    getError(state) {
      return state.error;
    },
    getPortfolio(state) {
      return state.portfolio;
    },
    getCurrentSlide(state) {
      return state.portfolio[state.indexSlide];
    },
    getIdxSlide(state) {
      return state.indexSlide;
    },
    getSliderDirection(state) {
      return state.sliderDirection;
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
        setTimeout(() => (context.state.error = ""), 3000);
      }
    },
  },
  modules: {},
});
