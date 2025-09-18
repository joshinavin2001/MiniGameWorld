import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";


// const HomePage = ({toogleDice}, {toogleTicTac} ) => {
  const HomePage = ({ toogleDice = () => {}, toogleTicTac = () => {} } = {}) => {
    const [isOpen,setOpen]=useState(false)
  return (
    <>
       <div className='bg-amber-100 min-h-screen'>
    <nav className='flex justify-between items-center px-5 py-2 bg-yellow-300'>
        <div className='flex gap-2'>
            <img className='h-12 w-12 sm:h-15 sm:w-15  pb-2' src="./homePageImg/gameLogo.png" alt="" />
            <h1 className='text-3xl font-bold'><span className=' font-extrabold text-4xl sm:text-5xl bg-gradient-to-r from-white to-black bg-clip-text text-transparent'>M</span>iniGameWorld</h1>
        </div>
        <div >
          <div className='hidden sm:block text-xl font-bold'>
             <a className='mr-5' href="#">Home</a>
            <a className='mr-5' href="#">About</a>
            <a className='mr-5' href="#">Contact</a>
          </div>
            <button onClick={()=>{setOpen(!isOpen)}} className ='block sm:hidden'> <GiHamburgerMenu /></button>
        </div> 
    </nav>
     <div className={` ${isOpen?"block" : "hidden"}  sm:hidden text-xl font-bold bg-zinc-800 text-white py-2 pl-2`}>
     <a className='mr-5 block hover:text-yellow-200' href="#">Home</a>
  <a className='mr-5 block hover:text-yellow-200' href="#">About</a>
  <a className='mr-5 block hover:text-yellow-200' href="#">Contact</a>
          </div>
   
    
        
       <div className='flex justify-center items-center mt-5 mb-10 text-center' >
        <img className='w-25 h-25' src="./homePageImg/BulbLogo.png" alt="" />
        <h1 className="sm:text-5xl text-4xl font-bold bg-gradient-to-r from-yellow-300 to-black bg-clip-text text-transparent italic">Welcome to MiniGameWorld</h1>
        <img className='w-25 h-25' src="./homePageImg/BulbLogo.png" alt="" />
       </div>
        {/* <section className='sm:flex sm:justify-evenly mx-auto w-50 sm:mx-0 sm:w-0 mt-8'> */}
          <section className='w-1/2 mx-auto mt-8 sm:flex sm:justify-evenly sm:w-auto sm:mx-0'>

          <div className='text-center h-70 w-54 border-2 rounded py-2 mb-5 sm:mb-0'>
              <h1 className='text-3xl font-bold'>Dice Game</h1>
           <img className=' m-auto h-44 w-44' src="./homePageImg/dice_Game.png" alt="Dice Game" />
           <button onClick={toogleDice} className='bg-zinc-900 text-xl my-2 text-white py-1 px-6 rounded active:scale-95 cursor-pointer'>Play Now</button>
          </div>

            <div className='text-center h-70 w-54 border-2 py-2 mb-5 sm:mb-0 '>
              <h1 className='text-3xl font-bold'>TicTacToe</h1>
           <img className=' m-auto h-44 w-44' src="./homePageImg/tictactoe.png" alt="Dice Game" />
           <button onClick={toogleTicTac} className='bg-zinc-900 text-xl mt-2 text-white py-1 px-6 rounded active:scale-95 cursor-pointer'>Play Now</button>
          </div>


           <div className='text-center h-64 w-54 border-2 mb-5 sm:mb-0 '>
              <h1 className='text-3xl font-bold'>Dice Game</h1>
           <img className='h-44 w-44' src="./homePageImg/dice_Game.jpg" alt="Dice Game" />
           <button className='bg-zinc-900 text-xl text-white py-1 px-6 rounded active:scale-95 cursor-pointer'>Play Now</button>
          </div>

        </section>
    </div>
    </>
 
  )
}

export default HomePage