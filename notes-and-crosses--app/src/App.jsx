import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Player from './components/Player/Player'
import GameBoard from './components/GameBoard/GameBoard'
import Logs from './components/Logs/Logs'
import { WINNING_COMBINATIONS } from './winning-combinations'
import GameOver from './components/GameOver/GameOver'


const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

function App() {

  function getActivePlayer(gameTurns) {
    let currentPlayer = "X";
      if (gameTurns.length > 0 && gameTurns[0].player === 'X'){
        currentPlayer = "O";
      }
      return currentPlayer;
  }

  function handlePlayerNameChange(playerSymbol, newName) {
    setPlayer((previousPlayers) => {
      return {
        ...previousPlayers,
        [playerSymbol]: newName
      };
    });
  }

  function handlePlayerChange(rowIndex, colIndex) {
    setGameTurns((gameTurns) => {
      const currentPlayer = getActivePlayer(gameTurns);
  
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...gameTurns,
      ];
      return updatedTurns;
    });
  }

  function checkForWinner(gameBoard, players) {
    let winner = null;



    for (const combination of WINNING_COMBINATIONS) {
      const firstPlayerSymbol = gameBoard[combination[0].row][combination[0].column];
      const secondPlayerSymbol = gameBoard[combination[1].row][combination[1].column];
      const thirdPlayerSymbol = gameBoard[combination[2].row][combination[2].column];
      console.log(firstPlayerSymbol, secondPlayerSymbol, thirdPlayerSymbol);

      if (firstPlayerSymbol && 
        firstPlayerSymbol === secondPlayerSymbol && 
        firstPlayerSymbol === thirdPlayerSymbol
      ) {

        winner = players[firstPlayerSymbol];
        return winner;
      }
    }
      return null;
  }

  function makeGameBoard(gameTurns) {
    let gameBoard = [...initialGameBoard.map(row => [...row])];

    for (const turn of gameTurns) {
      const {square, player } = turn;
      const {row, col} = square;

      gameBoard[row][col] = player;
    }
    return gameBoard;
  }

  function onGameRestart() {
    setGameTurns([]);
  }

  

  const [gameTurns, setGameTurns] = useState([]);
  const [players, setPlayer] = useState({ X: 'Player 1' , O: "Player 2" },);
  const activePlayer = getActivePlayer(gameTurns);
  const gameBoard = makeGameBoard(gameTurns);  
  const winner = checkForWinner(gameBoard, players);
  const isDraw = gameTurns.length === 9 && !winner;
  

  return (
    <>
    <Header />

    <main>
      <div id="game-container">
       <ol id="players" className='highlight-player'>
        <Player initialName="Player 1" 
        playerSymbol="X" 
        isActive={activePlayer === 'X'}
        onChangeName={handlePlayerNameChange}
        />
        <Player initialName="Player 2" playerSymbol="O" isActive={activePlayer === 'O'} onChangeName={handlePlayerNameChange}/>
       </ol>
       {(winner || isDraw) && (
        <GameOver
          winner={winner}
          isDraw={isDraw}
          onGameRestart={onGameRestart}
        />
      )}
       <GameBoard onPlayerChange={handlePlayerChange} board={gameBoard}/>
        </div>
        <Logs turns={gameTurns} /> 
   </main>
   </>
  )
}

export default App
