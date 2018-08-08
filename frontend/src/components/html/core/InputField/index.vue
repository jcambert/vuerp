
<template>
<div class="board-column">
    <div class="board-column-header">
      {{label}}
    </div>
    <input :type="type" :name="name" :id="id">
</div>
</template>
<script>
/* eslint-disable */
export default {
  name: "core-input",
  components: {
  },
  props: {
    label: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "text"
    },
    name: {
      type: String
    },
    id: {
      type: String
    }
  }
};
</script>
<style>
</style>



