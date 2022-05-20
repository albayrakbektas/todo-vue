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
      <div v-for="(item, index) in tasks" :key="index">
        <TasksMain
          v-if="item[0]['date']"
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
    console.log(this.tasks);
  },
  computed: {
    ...mapState(["isMenuPage", "tasks"]),
  },
};
</script>

<style lang="scss" scoped>
@import "/src/styles/main/todo-main.scss";
</style>
