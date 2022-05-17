<template>
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
</template>

<script>
export default {
  name: "CategoryMain",
};
</script>

<style lang="scss" scoped>
@import "/src/styles/category-main.scss";
</style>
