<template>
  <div class="task-time-container">
    <div class="task-time-day-container today">
      <span>TODAY</span>
    </div>
    <div class="task-time-day-container tomorrow">
      <span>TOMORROW</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TaskTime",
};
</script>

<style lang="scss" scoped>
@import "/src/styles/new-task/task-time-main.scss";
</style>
