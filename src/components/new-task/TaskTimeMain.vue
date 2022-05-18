<template>
  <div class="task-time-container">
    <div
      v-for="(item, index) in dates"
      :key="index"
      @click="setTaskDate(item.id)"
    >
      <TaskTime
        :id="item.id"
        :date="item.date"
        :class="isActiveClass === item.id ? 'active' : ''"
      />
    </div>
  </div>
</template>

<script>
import TaskTime from "@/components/new-task/TaskTime";
export default {
  name: "TaskTimeMain",
  data() {
    return {
      isActiveClass: "",
      dates: [
        {
          id: "today",
          date: "TODAY",
        },
        {
          id: "tomorrow",
          date: "TOMORROW",
        },
        {
          id: "daily",
          date: "DAILY",
        },
      ],
    };
  },
  methods: {
    setTaskDate(id) {
      this.isActiveClass = id;
      this.$store.commit("setTaskDate", id);
    },
  },
  components: { TaskTime },
};
</script>

<style lang="scss" scoped>
@import "/src/styles/new-task/task-time-main.scss";
</style>
