import React, { useState } from 'react';
import Board from './components/Board';
import History from './components/History';
import StatusMessage from './components/StatusMessage';
import { calculateWinner } from './helper';

import './styles/root.scss';

const App = () => {
  const [history, setHistory] = useState([
    { board: Array(9).fill(null), isNextX: true },
  ]);

  const [currentMove, setCurrentMove] = useState(0);
  const current = history[currentMove];

  const winner = calculateWinner(current.board);

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

  const moveTo = move => {
    setCurrentMove(move);
  };

  return (
    <div className="app">
      <h1>Zero-Kanta</h1>
      <small>Created by Virender Singh</small>
      <StatusMessage winner={winner} current={current} />
      <Board board={current.board} handleClick={handleClick} />
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
    </div>
  );
};

export default App;
