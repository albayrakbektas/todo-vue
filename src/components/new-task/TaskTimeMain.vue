<template>
  <div class="task-time-container">
    <TaskTime id="today" date="TODAY" />
    <TaskTime id="tomorrow" date="TOMORROW" />
    <TaskTime id="daily" date="DAILY" />
  </div>
</template>

<script>
import TaskTime from "@/components/new-task/TaskTime";
export default {
  name: "TaskTimeMain",
  components: { TaskTime },
};
</script>

<style lang="scss" scoped>
@import "/src/styles/new-task/task-time-main.scss";
</style>
