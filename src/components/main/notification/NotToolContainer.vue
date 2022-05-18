<template>
  <div
    v-if="$store.state.isNotifications"
    class="notifications-tooltip-container"
  >
    <NotTool />
  </div>
</template>

<script>
import NotTool from "@/components/main/notification/NotTool";
export default {
  name: "NotToolContainer",
  components: { NotTool },
};
</script>

<style lang="scss" scoped>
@import "/src/styles/main/notification/not-tool-container.scss";
</style>
