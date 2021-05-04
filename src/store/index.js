import { createStore } from "vuex";

export default createStore({
  state: {
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
        console.log(this.state.imagesSkills);
      } catch (e) {
        console.error(e);
      }
    },
  },
  modules: {},
});
