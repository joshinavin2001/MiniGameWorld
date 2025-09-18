import React, { useState } from 'react'
import TicTacInGame from './TicTacToe/TicTacInGame'
import Startgame from './DiceGame/Startgame'
import InGame from './DiceGame/InGame'
// import Instructions from './DiceGame/Instructions'
import Task from './DiceGame/Task'
import HomePage from './HomePage/HomePage'

const App = () => {
  const [playDice,SetPlayDice]=useState(false)
  const dicePlay =()=>{
    SetPlayDice((prev)=>!prev)
  }
  return (
    <div>
      {/* <TicTacInGame /> */}
      
      {/* <Startgame /> */}
        {/* <Task /> */}
        {playDice? <InGame /> : <HomePage toogle={dicePlay} /> }
        {/* <HomePage /> */}
      
    </div>
  )
}

export default App