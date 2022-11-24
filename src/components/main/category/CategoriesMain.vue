<template>
  <div class="categories-container">
    <div class="categories-title">
      <h2>CATEGORIES</h2>
    </div>
    <div class="categories">
      <CategoryMain />
    </div>
  </div>
</template>

<script>
import CategoryMain from "@/components/main/category/CategoryMain";
import { mapState } from "vuex";
export default {
  name: "CategoriesMain",
  components: { CategoryMain },
  computed: {
    ...mapState(["tasks"]),
  },
  mounted() {
    this.setCategories();
  },
  methods: {
    setCategories() {
      let categories = {};
      const tasks = Object.values(this.tasks);
      for (let i = 0; i < tasks.length; i++) {
        for (let j = 0; j < tasks[i].length; j++) {
          if (!categories[tasks[i][j].category]) {
            categories[tasks[i][j].category] = tasks[i][j];
          } else {
            console.log(Object.values(categories));
            // Object.values(categories[tasks[i][j]]).push(tasks[i][j]);
          }
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "/src/styles/main/category/categories-main.scss";
</style>
