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
        <li class="task-item">
          <TaskItem />
        </li>
        <li class="task-item">
          <TaskItem />
        </li>
        <li class="task-item">
          <TaskItem />
        </li>
        <li class="task-item">
          <TaskItem />
        </li>
        <li class="task-item">
          <TaskItem />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import TaskItem from "@/components/main/task/TaskItem";
// import NewTaskAddIcon from "@/components/main/task/NewTaskAddIcon";
import { mapState } from "vuex";
export default {
  name: "TasksMain",
  components: { TaskItem },
  props: {
    whichDay: String,
  },
  computed: {
    ...mapState(["isMenuPage"]),
  },
};
</script>

<style lang="scss" scoped>
@import "/src/styles/main/task/tasks-main.scss";
</style>
