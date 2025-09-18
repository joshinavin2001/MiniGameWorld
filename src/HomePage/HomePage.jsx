import React from 'react'


// const HomePage = ({toogleDice}, {toogleTicTac} ) => {
  const HomePage = ({ toogleDice = () => {}, toogleTicTac = () => {} } = {}) => {
  return (
    <>
       <div className='bg-amber-100 h-screen'>
    <nav className='flex justify-between items-center px-5 py-2 bg-yellow-300'>
        <div className='flex gap-2'>
             <img className='h-15 w-15 pb-2' src="./homePageImg/gameLogo.png" alt="" />
            <h1 className='text-3xl font-bold'><span className=' font-extrabold text-5xl bg-gradient-to-r from-white to-black bg-clip-text text-transparent'>M</span>iniGameWorld</h1>
        </div>
        <div className='flex gap-6 text-xl font-bold'>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
        </div>
    </nav>
        
       <div className='flex justify-center items-center mt-5 mb-10' >
        <img className='w-25 h-25' src="./homePageImg/BulbLogo.png" alt="" />
        <h1 className="text-5xl font-bold bg-gradient-to-r from-yellow-300 to-black bg-clip-text text-transparent italic">Welcome to MiniGameWorld</h1>
        <img className='w-25 h-25' src="./homePageImg/BulbLogo.png" alt="" />
       </div>
        <section className='flex justify-evenly mt-8'>
          <div className='text-center h-70 w-54 border-2 rounded py-2'>
              <h1 className='text-3xl font-bold'>Dice Game</h1>
           <img className=' m-auto h-44 w-44' src="./homePageImg/dice_Game.png" alt="Dice Game" />
           <button onClick={toogleDice} className='bg-zinc-900 text-xl my-2 text-white py-1 px-6 rounded active:scale-95 cursor-pointer'>Play Now</button>
          </div>

            <div className='text-center h-70 w-54 border-2 py-2'>
              <h1 className='text-3xl font-bold'>TicTacToe</h1>
           <img className=' m-auto h-44 w-44' src="./homePageImg/tictactoe.png" alt="Dice Game" />
           <button onClick={toogleTicTac} className='bg-zinc-900 text-xl mt-2 text-white py-1 px-6 rounded active:scale-95 cursor-pointer'>Play Now</button>
          </div>


           <div className='text-center h-64 w-54 border-2'>
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