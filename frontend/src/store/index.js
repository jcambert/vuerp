/* eslint-disable */
import vuex from 'vuex'
import socket from './socket'
import VueResource from 'vue-resource'

const store = {}

store.install = (vue,options) =>{
    vue.use(VueResource)
    vue.use(vuex)
    vue.prototype.$store = new vuex.Store({
      strict: process.env.NODE_ENV !== 'production'
    })

    if(options.socket){
        vue.use(socket,options.socket)
    }
}


export default store