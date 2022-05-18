<template>
  <div class="nav-items">
    <NavItem icon-span="bookmark" item-span="Templates" />
    <NavItem icon-span="category" item-span="Categories" />
    <NavItem icon-span="pie_chart" item-span="Analytic" />
  </div>
</template>

<script>
import NavItem from "@/components/menu/NavItem";
export default {
  name: "NavItems",
  components: { NavItem },
};
</script>

<style lang="scss" scoped>
@import "/src/styles/menu/nav-items.scss";
</style>
