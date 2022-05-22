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
        v-model="searchValue"
        autofocus
      />
    </div>
    <div class="header-item">
      <span
        v-if="!searchValue && isSearchVisible"
        @click="closeSearch"
        class="material-symbols-outlined search-open-button"
      >
        close
      </span>
      <span
        v-else
        @click="openSearch"
        class="material-symbols-outlined search-open-button"
      >
        search
      </span>
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
  data() {
    return {
      searchValue: "",
    };
  },
  methods: {
    openMenu() {
      this.$store.commit("setOpenMenu", !this.isMenuPage);
    },
    openSearch() {
      this.$store.commit("setSearchVisible", true);
    },
    closeSearch() {
      this.$store.commit("setSearchVisible", false);
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
