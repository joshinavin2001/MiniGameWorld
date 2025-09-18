import React from 'react'


const HomePage = ({toogle}) => {
  return (
    <>
       <div>
    <nav className='flex justify-between items-center px-5 py-2 bg-gray-400'>
        <div>
            <h1 className='text-4xl font-bold'>MiniGameWorld</h1>
        </div>
        <div className='flex gap-4 text-2xl'>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
        </div>
    </nav>
        

        <section className='flex justify-evenly mt-8'>
          <div className='text-center h-64 w-54 border-2 rounded'>
              <h1 className='text-3xl font-bold'>Dice Game</h1>
           <img className='h-44 w-44' src="./homePageImg/dice_Game.jpg" alt="Dice Game" />
           <button onClick={toogle} className='bg-zinc-900 text-xl text-white py-1 px-6 rounded active:scale-95 cursor-pointer'>Play Now</button>
          </div>

            <div className='text-center h-64 w-54 border-2'>
              <h1 className='text-3xl font-bold'>Dice Game</h1>
           <img className='h-44 w-44' src="./homePageImg/dice_Game.jpg" alt="Dice Game" />
           <button className='bg-zinc-900 text-xl text-white py-1 px-6 rounded active:scale-95 cursor-pointer'>Play Now</button>
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