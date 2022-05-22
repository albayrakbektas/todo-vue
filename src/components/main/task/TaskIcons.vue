<template>
  <div class="task-icon-container">
    <span @click="editTask(task)" class="material-symbols-outlined">
      edit
    </span>
    <span @click="deleteTask(task)" class="material-symbols-outlined">
      delete
    </span>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { v4 as uuidv4 } from "uuid";

export default {
  name: "TaskIcons",
  data() {
    return {
      data: this.task,
    };
  },
  props: {
    task: Object,
  },
  computed: {
    ...mapState(["tasks", "isEditTask", "editedTask"]),
  },
  methods: {
    deleteTask(obj) {
      if (this.tasks[obj.date].length < 2) {
        const newObj = new Object({
          [obj.date]: {
            id: uuidv4(),
            title: `Add a task for ${obj.date}..`,
            category: "category",
            status: true,
            date: obj.date,
          },
        });
        this.tasks[Object.keys(newObj)[0]].push(Object.values(newObj)[0]);
      }
      this.tasks[obj.date] = Object.values(this.tasks[obj.date]).filter(
        (el) => el.id !== obj.id
      );
    },
    editTask(obj) {
      this.$store.commit("setEditedTask", obj);
      const editedTask = this.editedTask;
      this.$store.commit("setTaskDate", editedTask.date);
      this.$store.commit("setTaskInputValue", editedTask.title);
      this.$store.commit("setCategoryInputValue", editedTask.category);
      this.$store.commit("setEditTask", true);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "/src/styles/main/task/task-icons.scss";
</style>
