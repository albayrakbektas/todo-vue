<template>
  <div class="new-task-footer">
    <div class="new-task-add-container">
      <div @click="addNewTask" class="new-task-add">
        <span>{{
          this.$store.state.isEditTask ? "Save Task" : "New Task"
        }}</span>
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
    ...mapState([
      "tasks",
      "taskDate",
      "taskInputValue",
      "taskCategoryValue",
      "isEditTask",
      "editedTask",
    ]),
  },
  methods: {
    addNewTask() {
      let editedTask = this.editedTask;
      if (this.isEditTask) {
        for (let i = 0; i < Object.values(this.tasks).length; i++) {
          for (let j = 0; j < Object.values(this.tasks)[i].length; j++) {
            if (Object.values(this.tasks)[i][j]["id"] === editedTask.id) {
              this.tasks[this.taskDate][j] = {
                id: editedTask.id,
                title: this.taskInputValue,
                category: this.taskCategoryValue,
                status: true,
                date: this.taskDate,
              };
              Object.values(this.tasks)[i].slice(j, j + 1);
            }
          }
        }
      }
      if (
        !this.isEditTask &&
        this.taskCategoryValue !== "" &&
        this.taskInputValue !== ""
      ) {
        for (let i = 0; i < Object.values(this.tasks).length; i++) {
          if (Object.values(this.tasks)[i][0]["date"] === this.taskDate) {
            Object.values(this.tasks)[i].push({
              id: uuidv4(),
              title: this.taskInputValue,
              category: this.taskCategoryValue,
              status: true,
              date: this.taskDate,
            });
          }
        }
      }
      this.$store.commit("setNewTask", false);
      this.$store.commit("setEditTask", false);
      this.$store.commit("setTaskInputValue", "");
      this.$store.commit("setCategoryInputValue", "");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "/src/styles/new-task/new-task-footer.scss";
</style>
