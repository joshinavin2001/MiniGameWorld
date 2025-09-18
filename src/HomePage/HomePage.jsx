import React from 'react'


const HomePage = () => {
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
        

        <section>
          <div>
          
           <img className='h-44 w-44' src="./homePageImg/dice_Game.jpg" alt="Dice Game" />
          {/* <img src="/homePageImg/dice_Game.jpg" alt="Dice Game" className="w-64 h-auto" /> */}
          </div>
        </section>
    </div>
    </>
 
  )
}

export default HomePage