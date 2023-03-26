import React, { useState,useContext, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import { socket } from './socket';
// import { ConnectionState } from './socketComponents/ConnectionState';
// import { ConnectionManager } from './socketComponents/ConnectionManager';
// import { Events } from './socketComponents/Events';
// import { MyForm } from './socketComponents/MyForm';



import './App.css';

import io from 'socket.io-client';

import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import ChatPage from './Pages/ChatPage';

import { SocketContext } from './Store/Context'


import ClientSocket from './Store/obj/ClientSocket';

const socket = io.connect("http://localhost:3001", {
  autoConnect: false
});

export const socketObj = new ClientSocket(socket)




function App() {

  const { SocketState, connectSocket, disconnectSocket } = useContext(SocketContext)

  // console.log('status', socketObj.socket.connected)
  console.log('state', SocketState)


  useEffect(() => {
    socketObj.socket.on('connect', connectSocket);
    socketObj.socket.on('disconnect', disconnectSocket);

    return () => {
      socketObj.socket.off('connect', connectSocket);
      socketObj.socket.off('disconnect', disconnectSocket);
    };

  }, [socketObj, connectSocket, disconnectSocket ]);

  return (
    // <>
    //   <ConnectionState isConnected={isConnected} />
    //   <Events events={fooEvents} />
    //   <ConnectionManager />
    //   <MyForm />
    // </>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/chat/:username/:room' element={<ChatPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
