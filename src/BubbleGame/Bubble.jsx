import React, { useEffect, useState } from 'react'

const Bubble = () => { const allBubbles =126
const [makeBubbles,setMakeBubbles]=useState(Array(allBubbles).fill(""))
const [hitRandomNum,setHitRandomNum]=useState(0)
const [score,setScore]=useState(0)
const [timer,setTimer]=useState(60)
const [gameStarted, setGameStarted] = useState(false);
const randomNum=(min,max)=>{
return Math.floor(Math.random()*(max-min+1))+min;
}
const matchNum = (number) => {
if(number===hitRandomNum){
  setHitRandomNum(randomNum(0,9))
  setScore((prev)=>prev+10)
}else{
  setScore((prev)=>prev-10)
}
};
const newBubbles =()=>{
const newArr = Array.from({length:allBubbles},()=>randomNum(0,9))
setMakeBubbles(newArr)

}

  const startGame = () => {
    setTimer(60);
    setGameStarted(true);
  };

const resetGame=()=>{
  setScore(0)
  setHitRandomNum(0)
  setTimer(60)
}
useEffect(()=>{
newBubbles()
setHitRandomNum(randomNum(0,9))

 const Interval=setInterval(() => {
  newBubbles()
}, 2000);
 return ()=>clearInterval(Interval)
},[])

useEffect(()=>{
  const countdown= setInterval(() => {
    if(timer>0&&gameStarted===true){
    setTimer((prev)=> prev-1)
  }
  return ()=>clearInterval(countdown)
  },1000);
  
 if (timer === 0) {
      setGameStarted(false); // stop the game
    }
    return () => clearInterval(countdown); // cleanup
  }, [ gameStarted,timer]);

  return (
    <>
    <div className='flex justify-center items-center h-20 text-5xl font-bold'>
      <h1 className='bg-gradient-to-r from-yellow-300 to-black bg-clip-text text-transparent italic'>Bubble Game</h1>
    </div>
    <div className='flex justify-center items-center '>
       <div className='bg-amber-100 w-320 h-140'>
        <nav className='bg-yellow-400 h-20 w-full flex justify-evenly' > 
            <div className='flex items-center'>
                <h1 className='font-bold text-black mr-2 text-3xl'>Hit</h1>
                <div className=' rounded w-12 h-10 bg-white flex justify-center items-center font-bold'>{hitRandomNum}</div>
            </div>
            <div className='flex items-center'>
                <h1 className='font-bold text-black mr-2 text-3xl'>Timer</h1>
                <div className=' w-12 h-10 bg-white flex justify-center items-center rounded font-bold'>{timer}</div>
            </div>
            <div className='flex items-center'>
                <h1 className='font-bold text-black mr-2 text-3xl'>Score</h1>
                <div className=' font-bold rounded w-12 h-10 bg-white flex justify-center items-center'> {score} </div>
            </div>
        </nav>
        <div className='flex flex-wrap ml-5'>
              {makeBubbles.map((elem,i)=>{
            return  <div key={i} onClick={()=>matchNum(elem)} className=' hover:bg-amber-600 border-2 rounded-full w-15 h-15 flex justify-center items-center font-bold mt-2 ml-2 cursor-pointer active:scale-95 bg-yellow-300'> {elem} </div>
         })}
        </div>
       
       
       </div>
       

    </div>
    <div className='flex justify-center gap-2 mt-4'>
       <button onClick={startGame} className='bg-amber-300 text-2xl text-black py-1 px-6 rounded active:scale-95 cursor-pointer font-bold'>Start Game</button>
        <button onClick={resetGame} className='bg-amber-300 text-2xl text-black py-1 px-6 rounded active:scale-95 cursor-pointer font-bold'>Reset Game</button>

    </div>
   
    </>
    
  )
}

export default Bubble