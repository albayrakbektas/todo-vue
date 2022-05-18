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
      <TasksMain which-day="TODAY'S TASKS" />
      <TasksMain which-day="TOMORROW'S TASKS" />
      <TasksMain which-day="Daily TASKS" />
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
  computed: {
    ...mapState(["isMenuPage"]),
  },
};
</script>

<style lang="scss" scoped>
@import "/src/styles/main/todo-main.scss";
</style>
