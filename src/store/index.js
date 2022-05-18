import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isMenuPage: false,
    isNewTaskPage: false,
    isSearchVisible: false,
    isNotifications: false,
    greetingMessage: "What's up, Bektas!",
  },
  getters: {},
  mutations: {
    setOpenMenu(state, value) {
      state.isMenuPage = value;
    },
    setNewTask(state, value) {
      state.isNewTaskPage = value;
    },
    setSearchVisible(state, value) {
      state.isSearchVisible = value;
    },
    setNotifications(state, value) {
      state.isNotifications = value;
    },
  },
  actions: {},
  modules: {},
});
