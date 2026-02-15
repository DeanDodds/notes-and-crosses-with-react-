import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Player from './components/Player/Player'

function App() {

  return (
    <>
    <Header />

    <main>
      <div id="game-container">
       <ol id="players">
        <Player initialName="Player 1" playerSymbol="X"/>
        <Player initialName="Player 2" playerSymbol="O"/>
       </ol>
        
      

    </div>
   </main>
   </>
  )
}

export default App
