import React from 'react';
import { socketObj } from '../App';
import { useState, useEffect } from 'react';

function UseMessage(event) {
    const [resMessage, setResMessage] = useState([])
    const [resLocation, setResLocation] = useState("")

    useEffect(() => {
        socketObj.socket.on('message', (message) => {
            setResMessage((initialmsg) => [...initialmsg, message])
        })
        socketObj.socket.on('locationMessage', (message) => {
            setResLocation(message)
        })

        return () => {
            socketObj.socket.off('message', () => {'message has been deconected -state change'})   
        }
        
    }, [event])

    return { resMessage, resLocation };
}

export default UseMessage;
