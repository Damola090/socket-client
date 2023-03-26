class Message {
    constructor(socket) {
        this.msg = {}
        this.msgSocket = socket
    }

    receiveMsg() {
        let recieve = true
        while (recieve === true) {
            console.log('listening')
            this.msgSocket.on('message', (message) => {
                console.log(message)
            })
            recieve = false
        }
    }
}

module.exports = Message;