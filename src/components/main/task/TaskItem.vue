<template>
  <div class="task-checkbox">
    <label class="checkbox-label">
      <input type="checkbox" />
      <span class="task-title">Daily meeting with team</span>
      <span class="checkmark"></span>
    </label>
  </div>
</template>

<script>
export default {
  name: "TaskItem",
};
</script>

<style lang="scss" scoped>
@import "/src/styles/main/task/task-item.scss";
</style>
