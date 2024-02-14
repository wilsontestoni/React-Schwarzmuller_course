import { useState, useRef } from 'react';

export default function Player() {
  
  const playerName = useRef()

  const [enteredName, setEnteredName] = useState(null);

  const handleClck = () => {
    setEnteredName(playerName.current.value);
  }
  
  return (
    <section id="player">
      {console.log(playerName)}
      <h2>Welcome { enteredName ?? "unknow entity"}</h2>
      <p>
        <input type="text" ref={playerName} />
        <button onClick={handleClck} >Set Name</button>
      </p>
    </section>
  );
}
