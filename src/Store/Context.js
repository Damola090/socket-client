import { createContext, useReducer, useState } from 'react';
import { socketObj } from '../App'

export const SocketContext = createContext();

function SocketReducer(state, action) {
    switch (action.type) {

        case "SOCKET_CONNECTED":  //Connect to Server
            return {
                ...state,
                connection : { socket: "connected",  status: action.payload }
            }
        case "SOCKET_DISCONNECTED": //Disconnect From Server
            return {
                ...state,
                connection : { socket: "disconnected", status: action.payload }
            }
        case "JOIN_ROOM":
            return {
                ...state,
                loading : true
            }
        case "JOIN_ROOM_SUCCESSFUL":
            return {
                ...state,
                loading : false,
                user : [...state.user, action.payload]

            }
        case "JOIN_ROOM_FAILED":
            return {
                ...state,
                loading : false,
                user : [...state.user]
            }
        
        default:
            return state

    }
}

function SocketContextProvider({ children }) {

    const [SocketState, dispatch] = useReducer(SocketReducer, {connection : {}, user : []})

    function connectSocket() {
        if (socketObj.socket.connected === true) { //connection successful
            dispatch({
                type: "SOCKET_CONNECTED",
                payload: socketObj.socket.connected
            })
            console.log('connected')

        } else if (socketObj.socket.connected === false) { // failed to connect

            dispatch({
                type: "SOCKET_DISCONNECTED",
                payload: socketObj.socket.connected
            })
            console.log('Disconnected')
        }
    }

    function disconnectSocket () {

        if (socketObj.socket.connected === false ) {
            dispatch({
                type: "SOCKET_DISCONNECTED",
                payload: socketObj.socket.connected
            })
        } 
    }

    function JoinAnyRoom(username, room) {
        dispatch({
            type : "JOIN_ROOM",
        })

        socketObj.pickRoomToJoin(username, room, (error) => {
            if (error) {
                dispatch({
                    type : "JOIN_ROOM_FAILED"
                })

                return;
            }

            dispatch({
                type : "JOIN_ROOM_SUCCESSFUL",
                payload : { username, room }
            })

        })

    }

    const value = {
        SocketState : SocketState,
        connectSocket : connectSocket,
        disconnectSocket : disconnectSocket,
        JoinAnyRoom : JoinAnyRoom
    }

    return (
        <SocketContext.Provider value={value}>
            {children}
        </SocketContext.Provider>
    )
}

export default SocketContextProvider;