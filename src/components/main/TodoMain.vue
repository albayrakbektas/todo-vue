<template>
  <div class="main-container" :class="isMenuPage ? 'translated-content' : ''">
    <div class="container">
      <HeaderSearch />
      <GreetingMain />
    </div>
    <div class="container-left-padding">
      <CategoriesMain />
    </div>
    <div class="container task-main-container">
      <div v-for="(item, index) in this.tasks" :key="index">
        <TasksMain
          :items="item"
          :which-day="`${item[0]['date'].toUpperCase()}'s Tasks`"
        />
      </div>
      <NewTaskAddIcon />
    </div>
  </div>
</template>

<script>
import HeaderSearch from "@/components/main/HeaderSearch";
import GreetingMain from "@/components/main/GreetingMain";
import CategoriesMain from "@/components/main/category/CategoriesMain";
import TasksMain from "@/components/main/task/TasksMain";
import { mapState } from "vuex";
import NewTaskAddIcon from "@/components/main/task/NewTaskAddIcon";
export default {
  name: "TodoMain",
  components: {
    NewTaskAddIcon,
    TasksMain,
    CategoriesMain,
    GreetingMain,
    HeaderSearch,
  },
  mounted() {
    console.log(
      Object.values(this.tasks).length,
      Object.values(this.tasks)[0][0]["date"]
    );
  },
  computed: {
    ...mapState(["isMenuPage", "tasks"]),
  },
  methods: {
    filterTasks(item, index, tasks) {
      // console.log(tasks[index].item.date);
      // console.log(
      //   tasks[index]["date"]
      //   // !tasks[index][item.date] && tasks.filter((el) => el.date === item.date)
      // );
      // if (tasks[index][item.date]) {
      //   // Object.values(tasks[index]).concat(item);
      //   console.log(tasks[index][item.date]);
      // }
      // console.log(tasks.filter((el) => el.date === item.date));
      !tasks.includes(item.date) && tasks.filter((el) => el.date === item.date);
      return [];
    },
  },
};
</script>

<style lang="scss" scoped>
@import "/src/styles/main/todo-main.scss";
</style>
