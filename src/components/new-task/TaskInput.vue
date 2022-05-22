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
import { mapState } from "vuex";

export default {
  name: "TaskInput",
  data() {
    return {
      inputValue: "",
      alertText: "",
    };
  },
  props: {
    placeHolder: String,
    id: String,
  },
  computed: {
    ...mapState(["isEditTask", "editedTask"]),
  },
  mounted() {
    this.setEditValues();
  },
  methods: {
    setEditValues() {
      if (this.isEditTask) {
        if (this.id === "new-task-input") {
          this.inputValue = this.editedTask.title;
          this.$store.commit("setTaskInputValue", this.inputValue);
        } else {
          this.inputValue = this.editedTask.category;
          this.$store.commit("setCategoryInputValue", this.inputValue);
        }
      }
    },
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
