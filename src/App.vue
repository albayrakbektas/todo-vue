<template>
  <div id="app">
    <NewTaskMain v-if="isNewTaskPage || isEditTask" />
    <div v-else>
      <MenuMain />
      <TodoMain />
    </div>
  </div>
</template>

<script>
import MenuMain from "@/components/menu/MenuMain";
import TodoMain from "@/components/main/TodoMain";
import NewTaskMain from "@/components/new-task/NewTaskMain";
import { mapState } from "vuex";
export default {
  name: "App",
  components: { NewTaskMain, TodoMain, MenuMain },
  computed: {
    ...mapState(["isNewTaskPage", "isEditTask"]),
  },
  methods: {
    openNewTaskPage() {
      this.isNewTaskPage = !this.isNewTaskPage;
      const newTaskPage = document.querySelector(".new-task-page-container");
      const mainContainer = document.querySelector(".main-container");
      if (this.isNewTaskPage) {
        newTaskPage.classList.add("display-block");
        mainContainer.classList.add("display-none");
      } else {
        newTaskPage.classList.remove("display-block");
        mainContainer.classList.remove("display-none");
      }
    },
  },
};
</script>

<style lang="scss">
@import "/src/assets/sass/_variables.scss";
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  background-color: #1f2d3d;
  height: max-content;
}
#app {
  background-color: #1f2d3d;
  min-height: 100vh;
  height: max-content;
  max-width: 100vw;
  width: 100vw;
  position: relative;
  overflow: hidden;
}
span {
  color: $color-dark-primary;
}
h2 {
  color: $color-icon-dark-secondary;
  font-size: $font-size-xs;
  font-weight: bold;
  padding: 1rem 0;
}
li {
  list-style: none;
}
.material-symbols-outlined {
  cursor: pointer;
  line-height: 0;
  font-weight: bolder;
}
.display-none {
  display: none;
}
.display-block {
  display: block;
}
</style>
