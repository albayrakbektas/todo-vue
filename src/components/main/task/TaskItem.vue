<template>
  <div class="task-checkbox">
    <label class="checkbox-label">
      <input type="checkbox" />
      <span class="task-title">{{ task.title }}</span>
      <span class="checkmark"></span>
    </label>
    <div @click="bas(task)">
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
  mounted() {
    console.log(this.tasks);
  },
  methods: {
    bas(e) {
      const filteredArray = [];
      for (let task of Object.values(this.tasks)) {
        filteredArray.push(task.filter((task) => task.id !== e.id));
      }
      console.log(filteredArray);
      // this.$store.commit("deleteTask", filteredArray);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "/src/styles/main/task/task-item.scss";
</style>
