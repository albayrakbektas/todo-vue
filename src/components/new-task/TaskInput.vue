<template>
  <div class="new-task-input-container">
    <label :for="id"></label>
    <input :id="id" :placeholder="placeHolder" />
  </div>
</template>

<script>
export default {
  name: "TaskInput",
  props: {
    placeHolder: String,
    id: String,
  },
};
</script>

<style lang="scss" scoped>
@import "/src/styles/new-task/task-input.scss";
</style>
