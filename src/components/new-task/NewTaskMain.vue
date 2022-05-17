<template>
  <div class="new-task-page-container display-none">
    <div class="new-task-page">
      <div class="container new-task-container">
        <div @click="openNewTaskPage" class="new-task-close-container">
          <span class="material-symbols-outlined"> close </span>
        </div>
        <div class="new-task-main">
          <div class="new-task-input-container">
            <label for="new-task-input"></label>
            <input id="new-task-input" placeholder="Add new task.." autofocus />
          </div>
          <div class="task-options-container">
            <div class="new-category-input-container">
              <label for="new-category-input"></label>
              <input
                id="new-category-input"
                placeholder="Add category.."
                autofocus
              />
            </div>
            <div class="task-time-container">
              <div class="task-time-day-container today">
                <span>TODAY</span>
              </div>
              <div class="task-time-day-container tomorrow">
                <span>TOMORROW</span>
              </div>
            </div>
          </div>
        </div>
        <div class="new-task-footer">
          <div class="new-task-add-container">
            <div class="new-task-add">
              <span>New Task</span>
              <span class="material-symbols-outlined"> expand_less </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewTaskMain",
};
</script>

<style lang="scss" scoped>
@import "/src/styles/main/task/new-task-main.scss";
</style>
