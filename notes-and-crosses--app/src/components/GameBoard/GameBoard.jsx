import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

export default function GameBoard({ onPlayerChange, turns}) {
//   const [gameBoard, setGameBoard] = useState(initialGameBoard);
  let gameBoard = initialGameBoard;

  for (const turn of turns) {
    const {square, player } = turn;
    const {row, col} = square;

    gameBoard[row][col] = player;
}


  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li className="game-row" key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li className="game-button-container" key={colIndex}>
                <button
                  onClick={() => onPlayerChange(rowIndex, colIndex)} disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
