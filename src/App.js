import React, { useState } from 'react';
import Board from './components/Board';
import { calculateWinner } from './helper';

import './styles/root.scss';

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isNextX, setisNextX] = useState(false);

  const winner = calculateWinner(board);
  const message = winner
    ? `Winner is ${winner}`
    : `Next Player is ${isNextX ? 'X' : 'O'}`;

  const handleClick = position => {
    if (board[position] || winner) {
      return;
    }

    setBoard(prev => {
      return prev.map((square, pos) => {
        if (pos == position) {
          return isNextX ? 'X' : 'O';
        }
        return square;
      });
    });
    setisNextX(prev => !prev);
  };

  return (
    <div className="app">
      <h1>Zero-Kanta</h1>
      <small>Created by Virender Singh</small>
      <h2>{message}</h2>
      <Board board={board} handleClick={handleClick} />
    </div>
  );
};

export default App;
