<template>
  <div class="task-checkbox">
    <label class="checkbox-label">
      <input type="checkbox" />
      <span class="task-title">{{ task.title }}</span>
      <span class="checkmark"></span>
    </label>
    <div class="task-icons-container" @click="deleteTask(task)">
      <TaskIcons />
    </div>
  </div>
</template>

<script>
import TaskIcons from "@/components/main/task/TaskIcons";
import { mapState } from "vuex";
export default {
  name: "TaskItem",
  components: { TaskIcons },
  props: {
    task: Object,
  },
  computed: {
    ...mapState(["tasks"]),
  },
  methods: {
    deleteTask(obj) {
      const filteredArray = [];
      for (let task of this.tasks) {
        if (task.id !== obj.id) {
          filteredArray.push(task);
        }
      }
      this.$store.commit("deleteTask", filteredArray);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "/src/styles/main/task/task-item.scss";
</style>
