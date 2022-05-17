<template>
  <div class="task-container container">
    <div class="task-container-title">
      <h2>TODAY'S TASKS</h2>
    </div>
    <div class="tasks-container">
      <ul class="task-items">
        <li class="task-item">
          <div class="task-checkbox">
            <label class="checkbox-label">
              <input type="checkbox" />
              <span class="task-title">Daily meeting with team</span>
              <span class="checkmark"></span>
            </label>
          </div>
        </li>
        <li class="task-item">
          <div class="task-checkbox">
            <label class="checkbox-label">
              <input type="checkbox" />
              <span class="task-title">Daily meeting with team</span>
              <span class="checkmark"></span>
            </label>
          </div>
        </li>
        <li class="task-item">
          <div class="task-checkbox">
            <label class="checkbox-label">
              <input type="checkbox" />
              <span class="task-title">Daily meeting with team</span>
              <span class="checkmark"></span>
            </label>
          </div>
        </li>
      </ul>
    </div>
    <div class="new-item-button-container">
      <div @click="openNewTaskPage" class="new-item-button">
        <span class="material-symbols-outlined"> add </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TasksMain",
};
</script>

<style lang="scss" scoped>
@import "/src/styles/tasks-main.scss";
</style>
