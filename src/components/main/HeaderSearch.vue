<template>
  <div class="header">
    <div @click="openMenu" class="header-item">
      <span class="material-symbols-outlined menu-open-button"> menu </span>
    </div>
    <div class="header-item header-input-container">
      <label for="search-input"></label>
      <input id="search-input" class="hidden-search-input" autofocus />
    </div>
    <div @click="openSearch" class="header-item">
      <span class="material-symbols-outlined search-open-button"> search </span>
    </div>
    <div class="header-item header-notification-container">
      <span class="material-symbols-outlined"> notifications </span>
      <div>
        <span>2</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderSearch",
};
</script>

<style lang="scss" scoped>
@import "/src/styles/header-search.scss";
</style>
