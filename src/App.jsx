import React, { useState } from 'react'
import TicTacInGame from './TicTacToe/TicTacInGame'
import Startgame from './DiceGame/Startgame'
import InGame from './DiceGame/InGame'
// import Instructions from './DiceGame/Instructions'
import Task from './DiceGame/Task'
import HomePage from './HomePage/HomePage'

const App = () => {
  const [playDice,SetPlayDice]=useState(false)
  const [playTicTac,setPlayTicTac]=useState(false)
  const dicePlay =()=>{
    SetPlayDice((prev)=>!prev)
  }
  const ticTacPlay =()=>{
    setPlayTicTac((prev)=>!prev)
  }
  return (

    // <div>
    //   {/* <TicTacInGame /> */}
    //   {/* <Startgame /> */}
    //     {/* <Task /> */}
    //     {playDice? <InGame /> : <HomePage toogleDice={dicePlay} />}
    //     {playTicTac? < TicTacInGame /> : <HomePage toogleTicTac={ticTacPlay} />}
    //     {/* <HomePage /> */}
      
    // </div>


    <div>
      {playDice ? (
        <InGame />
      ) : playTicTac ? (
        <TicTacInGame />
      ) : (
        <HomePage toogleDice={dicePlay} toogleTicTac={ticTacPlay} />
      )}
    </div>


  )
}

export default App