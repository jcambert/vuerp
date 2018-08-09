
<template>
    <div>
        <div class="draggable-field" :id="definition.id" :class="definition.id">
            <a>{{definition.label}} <i class="fa fa-plus-circle pull-right"></i></a>
        </div>
        <div class="draggable-helper" :class="definition.id+'-helper'">
            <component :id="definition.id+'-helper'" :is="dragHelperComponent" :definition="definition"></component>
        </div>
    </div>
</template>

<script>
/* eslint-disable */ 
import { titleCase } from "@/utils"
import _ from "lodash"
import formField from "@/components/draggable/forms/formField.vue"
import textField from "@/components/draggable/fields/textField.vue"
import numberField from "@/components/draggable/fields/numberField.vue"
export default {
  components: {
    formField,
    textField,
    numberField
  },
  data: function() {
    return {
      supportedComponents: ["textField", "numberField", "checkboxField","formField"]
    }
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
      // let type = titleCase(this.definition.type) + "Field"
      let type = this.definition.type + "Field"
      let field = this.definition.type + "-field"
      let result = _.find(this.supportedComponents, c => {
        return c == type
      })
      if (_.isUndefined(result))
        throw new Error(
          "Definition " + this.definition.type + " is not supported"
        )
      else return field
    }
  },
  mounted: function() {
    this.$nextTick(function() {
      // Code that will run only after the
      // entire view has been rendered
      $("." + this.definition.id).draggable({
        helper: () => {
          let $clone = $("#" + this.definition.id+"-helper").clone()

          return $("<div></div>").append($clone)
          // return '<component :is="dragHelperComponent" :definition="definition"></component>'
        },
        start: (event, ui) => {
          // console.dir(ui)
         // ui.helper.toggle()
         this.$emit('startDrag',{event:event,ui:ui})
        },
        stop: (event, ui) => {
           this.$emit('endDrag',{event:event,ui:ui})
        }
      })
      console.log("Draggable")
    })
  }
}
</script>
<style>
.draggable-field{
  width:200px;
}
.draggable-helper {
  visibility: hidden;
  height: 0;
}
</style>
