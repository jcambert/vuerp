
<template>
    <div>
        <div class="draggable-field">
            <a>{{definition.label}} <i class="fa fa-plus-circle pull-right"></i></a>
        </div>
        <div class="draggable-helper">
            <component :is="dragHelperComponent" :definition="definition"></component>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
import titleCase from "@/utils";
import _ from "lodash";
export default {
  data: {
    supportedComponents: ["TextField", "NumberField", "CheckboxField"]
  },
  props: {
    definition: {
      type: Object,
      required: true
    }
  },
  computed: {
    // label:()=>{return this.definition.label}
    dragHelperComponent: function() {
      let type = titleCase(definition.type) + "Field";
      let result = _.find(this.supportedComponents, c => {
        c == type;
      });
      if (_.isUndefined(result))
        throw new Error("Definition " + definition.type + " is not supported");
    }
  },
  mounted: function() {
    this.$nextTick(function() {
      // Code that will run only after the
      // entire view has been rendered
      $(".draggable-field").draggable({
        helper: function() {
          return "<div>TOTO</div>";
        }
      });
      console.log("Draggable");
    });
  }
};
</script>
<style>
.draggable-helper {
  visibility: hidden;
}
</style>
