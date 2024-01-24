import { useState } from "react"

import Header from "./components/Header/Header"
import Player from "./components/Player/Player"
import GameBoard from "./components/GameBoard/GameBoard"
import Log from './components/Log/Log'

function App() {
  const [gameTurns, setGameTurns] = useState([])
  const [activePlayer, setActivePlayer] = useState('X');
   
  function handleSelectSquare(rowIndex, colIndex) {
    setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X'); 
    setGameTurns(prevTurns => {
      let currentPlayer = 'X';

      if(prevTurns.length > 0 && prevTurns[0].player === 'X') {
        currentPlayer = 'O';
      }
      
      const updatedTurns = [ 
      { square: {row: rowIndex, col: colIndex}, player: activePlayer },
        ...prevTurns,
      ];
    
    return updatedTurns;
    
    })

  }
  
  return (
    <>
   <Header />
   <main>
     <div id='game-container'>
      <ol id='players' className="highlight-player">
       <Player initialName='player 1' symbol='X' isActive={activePlayer === 'X'}/>
       <Player initialName='player 2' symbol='O' isActive={activePlayer === 'O'}/>
      </ol>
      <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer} />
     </div>
   </main>
   </>
  )
}

export default App
