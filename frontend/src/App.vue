<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!--<input-field name="toto" id="titi" />-->
    <!--<draggable :elements="[{model:'input-field',type:'number',label:'Texte'},{model:'input-field',type:'checkbox',label:'Coche'}]"/>-->
    <field :definition="{type:'text',min:6,max:25,required:true,placeholder:'toto',name:'codart',label:'Code article',tooltip:'Aide Code Article'}"/>
   <!-- <router-view/> -->
  </div>
</template>

<script>
/* eslint-disable */
import 'jquery-ui-dist/jquery-ui.css'
import 'jquery-ui-dist/jquery-ui.theme.css'
import 'jquery-ui-dist/jquery-ui.js'
// import InputField from '@/components/html/core/InputField'
// import draggable from '@/components/draggable'
import field from '@/components/draggable/field'
export default {
  name: 'App',
  components: {
    field
    //InputField,
    //draggable
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
</style>
