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
// import { v4 as uuidv4 } from "uuid";
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
      let deletedObject = Object.values(this.tasks[obj.date]).filter(
        (el) => el.id !== obj.id
      );
      console.log(Object.values(this.tasks)[obj.date]);
      if (this.tasks[obj.date].length < 2) {
        Object.values(this.tasks)[obj.date].push({
          id: "0",
          title: "Add a task for Today..",
          category: "category",
          status: true,
          date: "today",
        });
      }
      this.tasks[obj.date] = deletedObject;
      console.log(this.tasks[obj.date]);
      // this.$store.commit("deleteTask", filteredArray);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "/src/styles/main/task/task-item.scss";
</style>
