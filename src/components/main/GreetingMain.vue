<template>
  <div class="greeting-container">
    <h1>{{ greetingMessage }}</h1>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "GreetingMain",
  computed: {
    ...mapState(["greetingMessage"]),
  },
};
</script>

<style lang="scss" scoped>
@import "/src/styles/main/greeting-main.scss";
</style>
