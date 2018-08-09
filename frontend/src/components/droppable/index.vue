<template>
    <div id="droppable" class="ui-widget-header" style="background-color: gray;"></div>
</template>

<script>
/* eslint-disable */ 
export default {
    mounted:function(){
        this.$nextTick(function() {
            $("#droppable").droppable({
                drop: function( event, ui ) {
                    ui.helper.clone().appendTo('#droppable');
                    
                }
            })
        })
    }
}
</script>

<style>
#droppable { width: 100%; height: 500px; padding: 0.1em; float: left; margin: 2px; }
.ui-droppable-hover{
    border-style: dotted;
    border-width: 7px;
}
</style>

