import React, { useState } from 'react';
import Square from './Square';

const Board = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isNextX, setisNextX] = useState(false);

  const handleClick = position => {
    if (board[position]) {
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

  const renderposition = position => {
    return (
      <Square value={board[position]} onClick={() => handleClick(position)} />
    );
  };

  return (
    <div className="board">
      <div className="board-row">
        {renderposition(0)}
        {renderposition(1)}
        {renderposition(2)}
      </div>
      <div className="board-row">
        {renderposition(3)}
        {renderposition(4)}
        {renderposition(5)}
      </div>
      <div className="board-row">
        {renderposition(6)}
        {renderposition(7)}
        {renderposition(8)}
      </div>
    </div>
  );
};

export default Board;
