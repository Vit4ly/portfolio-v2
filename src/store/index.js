import { createStore } from "vuex";

export default createStore({
  state: {
    error: String,
    imagesSkills: [],
  },
  mutations: {},
  getters: {
    getImagesSkills(state) {
      return state.imagesSkills;
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
