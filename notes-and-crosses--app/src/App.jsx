import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />

    <main>
      <div id="game-container">
        
      

    </div>
   </main>
   </>
  )
}

export default App
