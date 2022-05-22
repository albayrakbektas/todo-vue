<template>
  <div class="task-checkbox">
    <label class="checkbox-label">
      <input type="checkbox" />
      <span class="task-title">{{ task.title }}</span>
      <span class="checkmark"></span>
    </label>
    <div class="task-icons-container">
      <TaskIcons :task="task" />
    </div>
  </div>
</template>

<script>
import TaskIcons from "@/components/main/task/TaskIcons";
export default {
  name: "TaskItem",
  components: { TaskIcons },
  props: {
    task: Object,
  },
};
</script>

<style lang="scss" scoped>
@import "/src/styles/main/task/task-item.scss";
</style>
