<template>
  <div class="new-task-page-container">
    <div class="container new-task-container">
      <CloseButton />
      <div class="new-task-main">
        <TaskInput id="new-task-input" place-holder="Add new task.." />
        <div class="task-options-container">
          <TaskInput id="new-category-input" place-holder="Add category.." />
          <TaskTimeMain />
        </div>
      </div>
      <NewTaskFooter />
    </div>
  </div>
</template>

<script>
import CloseButton from "@/components/new-task/CloseButton";
import TaskTimeMain from "@/components/new-task/TaskTimeMain";
import NewTaskFooter from "@/components/new-task/NewTaskFooter";
import TaskInput from "@/components/new-task/TaskInput";
export default {
  name: "NewTaskMain",
  components: { TaskInput, NewTaskFooter, TaskTimeMain, CloseButton },
};
</script>

<style lang="scss" scoped>
@import "/src/styles/new-task/new-task-main.scss";
</style>
