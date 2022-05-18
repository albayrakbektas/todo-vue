<template>
  <div class="notifications-tooltip">
    <NotItem notification="not-1" />
    <NotItem notification="not-2" />
    <NotItem notification="not-3" />
    <NotItem notification="not-4" />
    <NotItem notification="not-5" />
  </div>
</template>

<script>
import NotItem from "@/components/main/notification/NotItem";
export default {
  name: "NotTool",
  components: { NotItem },
};
</script>

<style lang="scss" scoped>
@import "/src/styles/main/notification/not-tool.scss";
</style>
