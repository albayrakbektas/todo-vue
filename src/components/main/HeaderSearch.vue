<template>
  <div class="header">
    <div @click="openMenu" class="header-item">
      <span class="material-symbols-outlined menu-open-button"> menu </span>
    </div>
    <div class="header-item header-input-container">
      <label for="search-input"></label>
      <input
        id="search-input"
        :class="
          isSearchVisible ? 'visible-search-input' : 'hidden-search-input'
        "
        autofocus
      />
    </div>
    <div @click="openSearch" class="header-item">
      <span class="material-symbols-outlined search-open-button"> search </span>
    </div>
    <NotIcon />
    <NotToolContainer />
  </div>
</template>

<script>
import { mapState } from "vuex";
import NotToolContainer from "@/components/main/notification/NotToolContainer";
import NotIcon from "@/components/main/notification/NotIcon";

export default {
  name: "HeaderSearch",
  components: { NotIcon, NotToolContainer },
  methods: {
    openMenu() {
      this.$store.commit("setOpenMenu", !this.isMenuPage);
    },
    openSearch() {
      this.$store.commit("setSearchVisible", true);
    },
  },
  computed: {
    ...mapState(["isSearchVisible", "isMenuPage"]),
  },
};
</script>

<style lang="scss" scoped>
@import "/src/styles/main/header-search.scss";
</style>
