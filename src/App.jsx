import Header from "./Header/Header"


function App() {
  return (
    <>
   <Header />
   <main>
     <div id='game-container'>
      <ol id='players'>
        <li>
          <span className="player-name">Player 1</span>
          <span className="player-symbol">X</span>
        </li>
        <li>
          <span className="player-name">Player 2</span>
          <span className="player-symbol">O</span>
        </li>
      </ol>
     </div>
   </main>
   </>
  )
}

export default App
