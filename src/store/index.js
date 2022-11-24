import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: {
      today: [
        {
          id: "0",
          title: "Add a task for today..",
          category: "Work",
          status: true,
          date: "today",
        },
        {
          id: "0",
          title: "Second work category",
          category: "Work",
          status: true,
          date: "today",
        },
      ],
      tomorrow: [
        {
          id: "0",
          title: "Add a task for tomorrow..",
          category: "Home",
          status: true,
          date: "tomorrow",
        },
      ],
      daily: [
        {
          id: "0",
          title: "Add a task for daily..",
          category: "Out",
          status: true,
          date: "daily",
        },
      ],
    },
    taskDate: "",
    taskInputValue: "",
    taskCategoryValue: "",
    selectedTask: [],
    editedTask: {},
    isMenuPage: false,
    isNewTaskPage: false,
    isSearchVisible: false,
    isNotifications: false,
    isTaskInputNull: false,
    isCategoryInputNull: false,
    isEditTask: false,
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
    setEditTask(state, value) {
      state.isEditTask = value;
    },
    setEditedTask(state, value) {
      state.editedTask = value;
    },
    setSearchVisible(state, value) {
      state.isSearchVisible = value;
    },
    setNotifications(state, value) {
      state.isNotifications = value;
    },
    addNewTask(state, value) {
      state.tasks[value.date].push(value);
    },
    setTaskDate(state, value) {
      state.taskDate = value;
    },
    setTaskInputValue(state, value) {
      state.taskInputValue = value;
    },
    setCategoryInputValue(state, value) {
      state.taskCategoryValue = value;
    },
    deleteTask(state, value) {
      state.tasks = value;
    },
  },
  actions: {},
  modules: {},
});
