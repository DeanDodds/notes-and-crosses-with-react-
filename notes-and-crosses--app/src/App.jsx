import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Player from './components/Player/Player'
import GameBoard from './components/GameBoard/GameBoard'

function App() {
  const [gameState, setGameState] = useState([]);
  const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([]); // Added gameTurns state

  function handlePlayerChange(rowIndex, colIndex) {
    setActivePlayer((currentActivePlayer) => currentActivePlayer === "X" ? "O" : "X");

    setGameTurns((prevTurns) => {
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: activePlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  }

  return (
    <>
    <Header />

    <main>
      <div id="game-container">
       <ol id="players" className='highlight-player'>
        <Player initialName="Player 1" playerSymbol="X" isActive={activePlayer === 'X'}/>
        <Player initialName="Player 2" playerSymbol="O" isActive={activePlayer === 'O'}/>
       </ol>
        
       <GameBoard onPlayerChange={handlePlayerChange} turns={gameTurns}/>
    </div>
   </main>
   </>
  )
}

export default App
