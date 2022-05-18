<template>
  <div @click="closeNewTaskPage" class="new-task-close-container">
    <span class="material-symbols-outlined"> close </span>
  </div>
</template>

<script>
export default {
  name: "CloseButton",
  methods: {
    closeNewTaskPage() {
      this.$store.commit("setNewTask", false);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "/src/styles/new-task/close-button.scss";
</style>
