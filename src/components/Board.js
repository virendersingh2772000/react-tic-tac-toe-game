import React from 'react';
import Square from './Square';

const Board = ({ board, handleClick, winningSquares }) => {
  const renderposition = position => {
    const isWinningSquare = winningSquares.includes(position);

    return (
      <Square
        value={board[position]}
        onClick={() => handleClick(position)}
        isWinningSquare={isWinningSquare}
      />
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
