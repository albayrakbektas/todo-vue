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
    // tasks: [
    //   {
    //     id: "today-0",
    //     title: "Add a task for today..",
    //     category: "Work",
    //     status: true,
    //     date: "today",
    //   },
    //   {
    //     id: "tomorrow-0",
    //     title: "Add a task for tomorrow..",
    //     category: "Home",
    //     status: true,
    //     date: "tomorrow",
    //   },
    //
    //   {
    //     id: "daily-0",
    //     title: "Add a task for daily..",
    //     category: "Out",
    //     status: true,
    //     date: "daily",
    //   },
    // ],
    taskDate: "",
    taskInputValue: "",
    taskCategoryValue: "",
    selectedTask: [],
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
