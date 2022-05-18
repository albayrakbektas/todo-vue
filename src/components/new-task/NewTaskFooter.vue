<template>
  <div class="new-task-footer">
    <div class="new-task-add-container">
      <div @click="addNewTask" class="new-task-add">
        <span>New Task</span>
        <span class="material-symbols-outlined"> expand_less </span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { v4 as uuidv4 } from "uuid";
export default {
  name: "NewTaskFooter",
  computed: {
    ...mapState(["tasks", "taskDate", "taskInputValue", "taskCategoryValue"]),
  },
  methods: {
    addNewTask() {
      this.$store.commit("addNewTask", {
        id: uuidv4(),
        title: this.taskInputValue,
        category: this.taskCategoryValue,
        status: true,
        date: this.taskDate,
      });
      this.$store.commit("setNewTask", false);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "/src/styles/new-task/new-task-footer.scss";
</style>
