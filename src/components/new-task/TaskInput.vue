<template>
  <div class="new-task-input-container">
    <label :for="id"></label>
    <input
      @change="setInputValue"
      v-model="inputValue"
      :id="id"
      :placeholder="placeHolder"
      required
    />
  </div>
</template>

<script>
export default {
  name: "TaskInput",
  data() {
    return {
      inputValue: "",
    };
  },
  props: {
    placeHolder: String,
    id: String,
  },
  methods: {
    setInputValue() {
      if (this.id === "new-task-input") {
        this.$store.commit("setTaskInputValue", this.inputValue);
      } else {
        this.$store.commit("setCategoryInputValue", this.inputValue);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "/src/styles/new-task/task-input.scss";
</style>
