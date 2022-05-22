<template>
  <div class="new-item-button-container">
    <div @click="openNewTaskPage" class="new-item-button">
      <span class="material-symbols-outlined"> add </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewTaskAddIcon",
  methods: {
    openNewTaskPage() {
      this.$store.commit("setNewTask", true);
      this.$store.commit("setEditTask", false);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "/src/styles/main/task/new-task-add-icon.scss";
</style>
