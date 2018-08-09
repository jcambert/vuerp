/* eslint-disable */
import vuex from 'vuex'
import socket from './socket'
import VueResource from 'vue-resource'
import dragdropfield from '@/store/modules/dragdropfield'
const store = {}

store.install = (vue,options) =>{
    vue.use(VueResource)
    vue.use(vuex)
    vue.prototype.$store = new vuex.Store({
      strict: process.env.NODE_ENV !== 'production',
      modules:{
          dragdropfield: dragdropfield
      }
    })
    options = _.assign({},options)
    if(options.socket){
        vue.use(socket,options.socket)
    }
    console.log('Store is configured')
}


export default store