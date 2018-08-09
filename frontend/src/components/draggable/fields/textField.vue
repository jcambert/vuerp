<template>
  <div class="field-container">
    <el-input
          :placeholder="definition.placeholder"
          v-model="model"
          clearable>
    </el-input>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      model: ''
    }
  },
  props: {
    definition: {
      type: Object,
      required: true
    }
  }
}
</script>
<style>
.field-container{
  width: 100%
}
</style>
