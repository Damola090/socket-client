import { useState, useContext, useEffect, useCallback } from 'react'
import { Link, } from 'react-router-dom'
import Button from "../Components/Button";

import { SocketContext } from '../Store/Context';

import { socketObj } from '../App'

function LoginPage({}) {

    const {SocketState, JoinAnyRoom} = useContext(SocketContext)

    console.log(SocketState)

    const [username, setUserName] = useState('')
    const [room, setRoom] = useState('')

    const userNameHandler = (event) => {
        setUserName(event.target.value)
    }

    const roomHandler = (event) => {
        setRoom(event.target.value)
    }



    function SubmitHandler() {
        if (!username || !room) {
            return;
        }

        JoinAnyRoom(username, room)
    }

    
    return (
        <div className="LoginPage_container">
            <div className="LoginPage_inner-container">
                <h1 className="LoginPage_Head">Chat App</h1>
                <div className="LoginPage_Input_box">
                    <p>UserName</p>
                    <input className="login_input" type="text" placeholder="userName" onChange={userNameHandler} value={username} />
                </div>
                <div className="LoginPage_Input_box">
                    <p>Room</p>
                    <input className="login_input" type="text" placeholder="Room" onChange={roomHandler} value={room} />
                </div>
                <Link to={`/chat/${username}/${room}`}><Button onPress={SubmitHandler}>Submit</Button></Link>
            </div>
        </div>
    )
}

export default LoginPage;