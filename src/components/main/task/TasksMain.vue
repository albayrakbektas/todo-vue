<template>
  <div class="task-container">
    <div class="task-container-title">
      <h2>{{ whichDay }}</h2>
    </div>
    <div
      class="tasks-container"
      :class="isMenuPage ? 'tasks-container-translated' : 'tasks-container'"
    >
      <ul class="task-items">
        <li v-for="(item, index) in items" :key="index" class="task-item">
          <TaskItem :task="item" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import TaskItem from "@/components/main/task/TaskItem";
import { mapState } from "vuex";
export default {
  name: "TasksMain",
  components: { TaskItem },
  props: {
    whichDay: String,
    items: Array,
  },
  computed: {
    ...mapState(["isMenuPage"]),
  },
};
</script>

<style lang="scss" scoped>
@import "/src/styles/main/task/tasks-main.scss";
</style>
