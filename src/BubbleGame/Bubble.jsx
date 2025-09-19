import React, { useEffect, useState } from 'react'

const Bubble = () => {
    const allBubbles =126
const [makeBubbles,setMakeBubbles]=useState(Array(allBubbles).fill(""))
const randomNum=(min,max)=>{
    return Math.floor(Math.random()*(max-min+1))+min;
}
const newBubbles =()=>{
const newArr = Array.from({length:allBubbles},()=>randomNum(0,9))
setMakeBubbles(newArr)
}
useEffect(()=>{
newBubbles()

 const Interval=setInterval(() => {
  newBubbles()
}, 1000);
 return ()=>clearInterval(Interval)
},[])


  return (
    <>
    <div className='flex justify-center items-center h-screen'>
       <div className='bg-amber-100 w-320 h-140'>
        <nav className='bg-yellow-400 h-20 w-full flex justify-evenly' > 
            <div className='flex items-center'>
                <h1 className='font-bold text-black mr-2 text-3xl'>Hit</h1>
                <div className=' rounded w-12 h-10 bg-white flex justify-center items-center font-bold'>0</div>
            </div>
            <div className='flex items-center'>
                <h1 className='font-bold text-black mr-2 text-3xl'>Timer</h1>
                <div className=' w-12 h-10 bg-white flex justify-center items-center rounded font-bold'>0</div>
            </div>
            <div className='flex items-center'>
                <h1 className='font-bold text-black mr-2 text-3xl'>Score</h1>
                <div className=' font-bold rounded w-12 h-10 bg-white flex justify-center items-center'>0</div>
            </div>
        </nav>
        <div className='flex flex-wrap ml-5'>
              {makeBubbles.map((elem,i)=>{
            return  <div key={i} className='border-2 rounded-full w-15 h-15 flex justify-center items-center font-bold mt-2 ml-2 cursor-pointer active:scale-95'> {elem} </div>
         })}
        </div>
       
       
       </div>

    </div>
    </>
    
  )
}

export default Bubble