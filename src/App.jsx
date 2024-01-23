import Header from "./components/Header/Header"
import Player from "./components/Player/Player"

function App() {
  return (
    <>
   <Header />
   <main>
     <div id='game-container'>
      <ol id='players'>
       <Player initialName='player 1' symbol='X'/>
       <Player initialName='player 2' symbol='O'/>
      </ol>
     </div>
   </main>
   </>
  )
}

export default App
