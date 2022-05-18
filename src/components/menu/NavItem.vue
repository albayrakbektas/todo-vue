<template>
  <div class="nav-item">
    <span class="material-symbols-outlined"> {{ iconSpan }} </span>
    <span>{{ itemSpan }}</span>
  </div>
</template>

<script>
export default {
  name: "NavItem",
  props: {
    iconSpan: String,
    itemSpan: String,
  },
};
</script>

<style lang="scss" scoped>
@import "/src/styles/menu/nav-item.scss";
</style>
