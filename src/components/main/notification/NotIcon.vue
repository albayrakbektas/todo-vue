<template>
  <div
    @click="openNotification"
    class="header-item header-notification-container"
  >
    <span class="material-symbols-outlined"> notifications </span>
    <div>
      <span>2</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotIcon",
  methods: {
    openNotification() {
      this.$store.commit(
        "setNotifications",
        !this.$store.state.isNotifications
      );
    },
  },
};
</script>

<style lang="scss" scoped>
@import "/src/styles/main/notification/not-icon.scss";
</style>
