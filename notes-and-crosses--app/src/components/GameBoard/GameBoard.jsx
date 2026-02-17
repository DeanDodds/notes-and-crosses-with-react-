import { useState } from "react";

export default function GameBoard({ onPlayerChange, board}) {
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
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
