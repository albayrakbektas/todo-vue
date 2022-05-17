<template>
  <div class="main-container">
    <div class="">
      <div class="container">
        <HeaderSearch />
        <div class="greeting-container">
          <h1>Whats's up, Bektas!</h1>
        </div>
      </div>
      <div class="categories-container">
        <div class="categories-title">
          <h2>CATEGORIES</h2>
        </div>
        <div class="cagetories">
          <div class="category-scroll">
            <div class="category-container">
              <div class="category-tasks">
                <span>40 tasks</span>
              </div>
              <div class="category-name">
                <span>Business</span>
              </div>
              <hr class="category-divider" />
            </div>
            <div class="category-container">
              <div class="category-tasks">
                <span> 18 tasks </span>
              </div>
              <div class="category-name">
                <span> Personal </span>
              </div>
              <hr class="category-divider" />
            </div>
          </div>
        </div>
      </div>
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
    </div>
  </div>
</template>

<script>
import HeaderSearch from "@/components/HeaderSearch";
export default {
  name: "TodoMain",
  components: { HeaderSearch },
};
</script>

<style lang="scss" scoped>
@import "src/styles/todo-main.scss";
</style>
