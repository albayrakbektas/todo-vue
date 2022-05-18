<template>
  <div :id="id" class="task-time-day-container today">
    <span>{{ date }}</span>
  </div>
</template>

<script>
export default {
  name: "TaskTime",
  props: {
    date: String,
    id: String,
  },
};
</script>

<style lang="scss" scoped>
@import "/src/styles/new-task/task-time.scss";
</style>
