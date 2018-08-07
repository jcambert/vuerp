/* eslint-disable */

const socket = {}



socket.MESSAGES = {
    connected: '$socketConnected',
    disconnected: '$socketDisconnected',
    reconnect: '$socketReconnect',
    reconnecting: '$socketReconnecting',
    socketError: '$socketError',
    socketTimeOut: '$socketTimeOut'
}

socket.install = (vue, options) => {
    options = _.assign({}, options)
    var sockets
    if (options.socket)
        sockets = options.socket
    else if (window.io)
        sockets = window.io
    else if (options.url){
        if(options.useSocketIO){
            sockets = io(options.url)
        }else if(options.useSockJS){
            sockets
        }
    }
    if (sockets == null)
        throw new Error("VueResX cannot locate Socket.io\nEnsure that Socket.io is passed by options or in window var")

    global.sockets = sockets
    vue.prototype.$socket = sockets

    console.log('Add socket to vue')
}

socket.mounted = () => {
    if (this.$socket) {
        this.$socket.on('connect', () => {
            this.$emit(socket.MESSAGES.connected)
        })
        this.$socket.on('disconnect', () => {
            this.$emit(socket.MESSAGES.disconnected)
        })
        this.$socket.on('reconnecting', (number) => {
            this.$emit(socket.MESSAGES.reconnecting,{number:number})
        })
        this.$socket.on('reconnect', (number) => {
            this.$emit(socket.MESSAGES.reconnect,{number:number})
        })
        this.$socket.on('connect_error', (err) => {
            this.$emit(socket.MESSAGES.socketError,{error:err})
        })
        this.$socket.on('connect_timeout', () => {
            this.$emit(socket.MESSAGES.socketTimeOut)
        })
        
    }
}

export default socket