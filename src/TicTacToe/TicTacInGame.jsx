import React, { useState } from 'react'

const TicTacInGame = () => {
  const [putValue,setPutValue]=useState(Array(9).fill(""))
  const [currentValue,setCurrentValue]=useState("X")
  const [winner,setWinner]=useState("")
  const [scoreX,setScoreX]=useState(0)
  const [scoreY,setScoreY]=useState(0)
  const [draw,setDraw]=useState(false)
  const handleCheck =(index)=>{
    if(putValue[index]!=="" || winner) return;
    const newarr = [...putValue]
    newarr[index]=currentValue
    setPutValue(newarr)
    setCurrentValue(currentValue==="X"?"O":"X")
    const result = checkWinner(newarr)
    setWinner(result)
    if(result==="X"){
      setScoreX((prev)=>prev+1)
    }else if(result==="O"){
      setScoreY((prev)=>prev+1)
    } 
     if (!result && newarr.every((cell) => cell !== "")) {
      drawgame()
    setDraw(true);
  }
  }
  const drawgame=()=>{
    setDraw(true)
  }
  const reset =()=>{
    setPutValue(Array(9).fill(""))
    setCurrentValue("X")
    setWinner("")
    setDraw(false);
  }
  const newGame = ()=>{
    setPutValue(Array(9).fill(""))
    setCurrentValue("X")
    setWinner("")
    setScoreY(0)
    setScoreX(0)
    setDraw(false);
  }
  const checkWinner =(data)=>{
      const winningArr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for(let pattern of winningArr){
    const [a,b,c] = pattern
    if(data[a]&&data[a]===data[b]&&data[a]===data[c]){
      return data[a]
    }
  }
  return
  }
  return (
   
    <>
    <div className='bg-gradient-to-r from-green-500 to-gray-600 min-h-screen w-screen'>
         <header className='flex justify-between px-5 py-2 text-white bg-zinc-600'>
      {/* <h1 className='text-4xl font-bold'>TicTacToe</h1> */}
      <h1 className="text-4xl font-bold bg-gradient-to-r from-green-500 to-red-500 bg-clip-text text-transparent">
  TicTacToe
</h1>

      <div>
         <p className='font-bold text-3xl bg-gradient-to-r from-green-500 to-red-500 bg-clip-text text-transparent'>Score</p>
         <div className=' flex text-xl font-bold gap-1'>
          <p className='bg-gradient-to-r from-green-500 to-red-500 bg-clip-text text-transparent'>X= {scoreX} </p>
          <p className='bg-gradient-to-r from-green-500 to-red-500 bg-clip-text text-transparent'>Y= {scoreY} </p>
         </div>
      </div>
    </header>
    <section >
      <div className='flex justify-center'>
<h1
  className={`text-3xl font-bold mt-2 transition-all duration-500 ease-in-out 
    ${(winner || draw) ? "opacity-100 scale-100 bg-gradient-to-r from-gray-600 to-red-500 bg-clip-text text-transparent " : "opacity-0 scale-95 pointer-events-none"}`}
>
  {winner ? `Winner = ${winner}` : draw ? "Draw" : ""}
</h1>

      </div>
      <div className='flex justify-center mt-2'>
         <div className='grid grid-cols-3 w-70 h-70 '>
       {putValue.map((elem,i)=>{
         return <div 
  onClick={() => handleCheck(i)} 
  className={`rounded flex justify-center items-center border-2 bg-zinc-600 text-3xl font-bold w-24 h-24
    ${elem === "X" ? "text-green-500" : elem === "O" ? "text-red-500" : "text-white"}`}>
        {/* //  <div onClick={()=>handleCheck(i)} className=' rounded flex justify-center items-center border-2 bg-zinc-600 text-3xl font-bold text-white w-24 h-24'> */}
            {elem}
        </div>
       })}
      </div>
      </div>
      <div className='flex justify-center mt-5'>
        <button onClick={reset} className='  bg-gradient-to-r from-green-500 to-red-500 text-white font-bold py-2 px-4 rounded'>Reset</button>
      </div>
      <div className='flex justify-center mt-2'>
        <button onClick={newGame} className=' bg-gradient-to-r from-green-500 to-red-500 text-white font-bold py-2 px-4 rounded'>New Game</button>
      </div>
    </section>
    </div>
 
    </>
  )
}

export default TicTacInGame