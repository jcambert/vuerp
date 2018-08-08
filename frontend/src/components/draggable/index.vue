<template>
    <nav class="nav-sidebar">
        <ul class="nav">
            <li v-for="(element,index) in elements" :key="element.id">
                <component :is="element.model" :type="element.type" :label="element.label" :id="'id'+index" class="draggable-field" />
            </li>
        </ul>
    </nav>
</template>

<script>
/* eslint-disable */
// @See http://balbinder.com/projects/form-builder/
//import $ from 'jquery'

import InputField from "@/components/html/core/InputField";
export default {
  components: {
    InputField
  },
  data: function() {
    return {
      _id: 0
    };
  },
  props: {
    elements: {
      type: Array
    }
  },
  computed: {},
  mounted: function() {
    this.$nextTick(function() {
      // Code that will run only after the
      // entire view has been rendered
      $( ".draggable-field" ).draggable({helper:function(){return '<div>TOTO</div>'}});
      console.log('Draggable')
    });
  }
};
</script>

<style>
.draggable-field:hover {
    cursor:grab
}
</style>


