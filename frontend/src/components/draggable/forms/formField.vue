<template>
    <el-form ref="form" :model="form" label-width="120px" size="mini" height="100%">
        <div>{{definition.label}}</div>
    </el-form>
</template>
<script>
/* eslint-disable */
export default {
    data: () => {
        return {
        form: {}
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

