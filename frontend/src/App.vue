<template>
  <div id="app">
    <el-container>
      <el-header style="background-color:red;">
        HEADER
      </el-header>
      <el-container>
        <el-aside style="background-color:green;" width="200px">
          <draggable  :definition="{id:'formfield', type:'form',label:'Formulaire'}"/>
          <draggable v-on:startDrag="startDrag" v-on:endDrag="endDrag" :definition="{id:'textfield', type:'text',min:6,max:25,required:true,placeholder:'code article',name:'codart',label:'Code article',tooltip:'Aide Code Article'}"/>
          <draggable v-on:startDrag="startDrag" v-on:endDrag="endDrag" :definition="{id:'numberfield', type:'number',min:0,required:true,placeholder:'stk phy',name:'stkphy',label:'Stock Physique',tooltip:'Aide Stock Physique'}"/>
        </el-aside>
        <el-main style="background-color:blue;">
          <droppable/>
        </el-main>
      </el-container>
    </el-container>
   <!-- <router-view/> -->
  </div>
</template>

<script>
/* eslint-disable */
import 'jquery-ui-dist/jquery-ui.css'
import 'jquery-ui-dist/jquery-ui.theme.css'
import 'jquery-ui-dist/jquery-ui.js'

import draggable from '@/components/draggable/draggable.vue'
import droppable from '@/components/droppable'
export default {
  name: 'App',
  components: {
    draggable,
    droppable
    //InputField,
    //draggable
  },
  methods:{
    startDrag:(elt)=>{
      //console.dir(elt.ui.helper)
      console.log(elt.ui.helper.attr('id')+' start dragging')
    },
    endDrag:(elt)=>{
      console.log(elt.ui.helper.attr('id')+' end dragging')
    }

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.el-main{
  padding: 5px;
}
</style>
