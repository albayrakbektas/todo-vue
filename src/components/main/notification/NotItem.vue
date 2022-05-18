<template>
  <div class="notification-item">
    <div class="notification-unread-icon"></div>
    <span class="notification-text">{{ notification }}</span>
  </div>
</template>

<script>
export default {
  name: "NotItem",
  props: {
    notification: String,
  },
};
</script>

<style lang="scss" scoped>
@import "/src/styles/main/notification/not-item.scss";
</style>
