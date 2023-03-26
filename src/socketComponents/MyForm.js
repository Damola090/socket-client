import React, { useEffect, useState } from 'react';
import { socket } from '../socket';

import UseMessage from '../Hooks/UseMessage';

export function MyForm() {
  const [value, setValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [recv, setRecv] = useState(true)

  const {resMessage, resLocation } = UseMessage(recv)

  useEffect(() => {
    if (resMessage || resLocation) {
      console.log(resMessage)
      console.log(resLocation)
    }

  }, [resMessage, resLocation])

  function onSubmit(event) {
    event.preventDefault();
    setIsLoading(true);

    socket.timeout(5000).emit('create-something', value, () => {
      setIsLoading(false);
    });
  }

  return (
    <form onSubmit={ onSubmit }>
      <input onChange={ e => setValue(e.target.value) } />

      <button type="submit" disabled={ isLoading }>Submit</button>
    </form>
  );
}