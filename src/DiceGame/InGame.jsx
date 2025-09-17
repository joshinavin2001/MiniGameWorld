import React, { useState } from "react";
import Instructions from "./Instructions";

const InGame = () => {
  const arrNum =[1,2,3,4,5,6]
  const [selectedNumber,setSelectedNum]=useState()
  const [currentDice,SetCurrentDice]=useState(1)
  const [increaseScore,setIncreaseScore]=useState(0)
  const [showWarning,setWarning]=useState(false)
  const [showText,setShowText]=useState(false)
   
  const randomNumber =(min,max)=>{
  return Math.floor(Math.random()*(max-min))+min
  }
  const rollDice =()=>{
    if(selectedNumber==null){
      setWarning(true)
      return;
    }
    
   const randomNum= randomNumber(1,7)
     SetCurrentDice((prev)=>randomNum)
     setWarning(false)
      
       if(selectedNumber===randomNum){
       setIncreaseScore((prev)=>prev+2)
     }else{
      setIncreaseScore((prev)=>prev-2)
     }
  
      }
    
  const resetGame = () => {
  setSelectedNum(null);
  SetCurrentDice(1);
  setIncreaseScore(0);
  setWarning(false);
};
 
const hideShow =()=>{
setShowText((prev)=>!prev)
}

  return (
    <>
      <div className="flex justify-between mt-6 mx-8">
        <div className="text-center">
          <h1 className="text-6xl font-bold">{increaseScore}</h1>
          <p className="font-bold">Total Score</p>
        </div>
        <div className="text-end">
          <p className={` text-red-700 font-bold ${showWarning?"block":"hidden"} `}>You Are Not Selected Any Number !</p>
          {arrNum.map((elem,i)=>{
            const btnSelectedNum = selectedNumber ===elem
            return <button key={i} onClick={()=>setSelectedNum(elem)} className={` sm:py-2 px-3 border-2 xl:py-3 xl:px-5 ml-2 font-bold hover:bg-zinc-900 hover:text-white ` + (btnSelectedNum?"bg-black text-white" : "bg-white text-black") }>
            {elem}
          </button>
          })}
          
          <p className="font-bold">Select Number</p>
        </div>
      </div>

      <div className="flex justify-center mt-4">
        <div>
          <img
            className="cursor-pointer" onClick={rollDice}
            src={`./project-two-imgs/dice_${currentDice}.png`}
            alt=""
          />
          <p className="text-center font-semibold text-2xl">
            Click On Dice To Roll
          </p>
          <div className=" text-center">
            <button onClick={resetGame} className="border-2 py-1 mt-5 px-8 rounded cursor-pointer active:scale-90">
              Reset Score
            </button>
          </div>
          <div className="text-center">
            <button onClick={hideShow} className="bg-black text-white py-1 px-8 mt-3 rounded cursor-pointer active:scale-90">
              Show Rules
            </button>
          
          </div>
          
        </div>
         
      </div>
         <div  className={` bg-zinc-800 text-white p-4 rounded mt-4 mx-5 ${showText?"block":"hidden"} `}>
        <h1 className='text-4xl font-semibold mb-5'>How To Play Dice Game</h1>
        <p>Selcet Any Number</p>
        <p>Click On Dice Image</p>
        <p>After click on  dice  if selected number is equal to dice number you will get same point as dice </p>
        <p>If you get wrong guess then  2 point will be dedcuted </p>
    </div>
    </>
  );
};

export default InGame;
