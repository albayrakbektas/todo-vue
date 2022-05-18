<template>
  <div class="left-arrow-icon-container">
    <div @click="openMenu" class="left-arrow-icon menu-close-button">
      <span class="material-symbols-outlined"> navigate_before </span>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "LeftArrowIcon",
  methods: {
    openMenu() {
      console.log(this.isSearchVisible);
      this.$store.commit("setOpenMenu", !this.isMenuPage);
    },
  },
  computed: {
    ...mapState(["isMenuPage"]),
  },
};
</script>

<style lang="scss" scoped>
@import "/src/styles/menu/left-arrow-icon.scss";
</style>
