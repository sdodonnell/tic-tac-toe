import React, { useState } from 'react';
import './App.css';
import Board from './Board';

function App() {

  const [size, setSize] = useState(3);
  const [reset, setReset] = useState(0);
  const [won, setWon] = useState(false);

  const handleReset = e => {
    e.preventDefault(); 
    setSize(3);
    setWon(false);
    setReset(Math.random());
  }

  return (
    <div className="App">
      <h1>Tic-Tac-Toe</h1>
      <p>Use the input below to change the size of the board. Click "Reset" to start a new game with a 3x3 board.</p>
      
      <Board 
        key={reset} 
        size={size} 
        won={won}
        setWon={setWon}/>
      
      
      <form className="board-input">
        <input type="number" min="3" value={size} onChange={e => setSize(+e.target.value)}/>
        <button onClick={handleReset}>Reset</button>
      </form>
      <div className="winner">
        {won === 'draw' ? "It's a draw!" :
            won ? `${won} wins!` : null}
      </div>
    </div>
  );
}

export default App;
