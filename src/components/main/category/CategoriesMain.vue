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
export default {
  name: "CategoriesMain",
  components: { CategoryMain },
};
</script>

<style lang="scss" scoped>
@import "/src/styles/main/category/categories-main.scss";
</style>
