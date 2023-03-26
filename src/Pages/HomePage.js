import { useContext, useCallback, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import React from "react";

import { SocketContext } from '../Store/Context';

import { socketObj } from '../App';


function HomePage() {

    const { SocketState, connectSocket, disconnectSocket } = useContext(SocketContext)

    const navigate = useNavigate();

    useEffect(() => {
        if (SocketState.connection.socket === 'connected') {
            navigate('/login')
        }

        if (SocketState.connection.socket === 'disconnected') {
            navigate('/')
        }

    },[SocketState])


    //connect to Server-Socket
    const selfConnectionConnect = useCallback(() => {

        socketObj.socket.connect()
       
    }, [socketObj])


    //Disconnect From Server-Socket
    const selfConnectionDisConnect = useCallback(() => {

        socketObj.socket.disconnect()

    }, [socketObj])

    return (
        <div className="button-container">
            <Link><button className="button-item" onClick={selfConnectionConnect}>I chose To Connect</button></Link>
            <Link><button className="button-item" onClick={selfConnectionDisConnect}>disconnect</button></Link>
        </div>
    )
}

export default HomePage;