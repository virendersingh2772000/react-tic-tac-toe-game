import React, { useState } from 'react';
import Board from './components/Board';
import { calculateWinner } from './helper';

import './styles/root.scss';

const App = () => {
  const [history, setHistory] = useState([
    { board: Array(9).fill(null), isNextX: true },
  ]);

  const [currentMove, setCurrentMove] = useState(0);
  const current = history[currentMove];

  const winner = calculateWinner(current.board);
  const message = winner
    ? `Winner is ${winner}`
    : `Next Player is ${current.isNextX ? 'X' : 'O'}`;

  const handleClick = position => {
    if (current.board[position] || winner) {
      return;
    }

    setHistory(prev => {
      const last = prev[prev.length - 1];

      const newBoard = last.board.map((square, pos) => {
        if (pos == position) {
          return last.isNextX ? 'X' : 'O';
        }
        return square;
      });
      return prev.concat({ board: newBoard, isNextX: !last.isNextX });
    });
    setCurrentMove(prev => prev + 1);
  };

  return (
    <div className="app">
      <h1>Zero-Kanta</h1>
      <small>Created by Virender Singh</small>
      <h2>{message}</h2>
      <Board board={current.board} handleClick={handleClick} />
    </div>
  );
};

export default App;
