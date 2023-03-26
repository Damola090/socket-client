class ClientSocket {
    constructor(socket) {
        this.id = "";
        this.user = {};
        this.socket = socket
        this.message = {}
    }

    //state of our socketObject


    //Send Login details to Server
    pickRoomToJoin(username, room, acknowledge) {
        this.socket.emit('join', ({ username, room }), acknowledge)
    }
    

    //Receive Message from Server
    receiveMessage(messageHandler) {
        this.socket.on('message', messageHandler)
    }


}

module.exports = ClientSocket

