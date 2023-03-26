import React, { useState, useEffect } from 'react';

import { socketObj } from '../App';

function UseRoomData(event) {
    const [roomData, setRoomData] = useState([])

    useEffect(() => {
        socketObj.socket.on('roomData', (data) => {
            setRoomData(data)
        })

        return () => {
            socketObj.socket.off('roomData', () => {'RoomData has been deconected -state change'})
            setRoomData([])
        }
    }, [event])
   return { roomData }
}

export default UseRoomData;