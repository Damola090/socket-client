import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import LeftSide from "../Components/Left/LeftSide";
import MiddleSide from "../Components/Middle/MiddleSide";
import RightSide from "../Components/Right/RightSide";

import { SocketContext } from '../Store/Context';

import UseMessage from '../Hooks/UseMessage';
import UseRoomData from '../Hooks/UseRoomData';

function ChatPage() {

    const { resMessage, resLocation } = UseMessage(true)
    const { roomData } = UseRoomData(true)

    console.log(resMessage)
    console.log(roomData)

    const {username, room} = useParams()

    return (
        <div className="App">
            <LeftSide />
            <MiddleSide />
            <RightSide />
        </div>
    )
}

export default ChatPage;