import React, { useState } from 'react'
import Counter from './components/Counter'

function App() {

  const [count, setCount] = useState(0)
  const [timer, setTimer] = useState("")

  const handleIncrement = () => {
    clearInterval(timer);
    const id = setInterval(() => {
      setCount((c) => c + 1)
    }, 1000);
    setTimer(id)
  }

  const handleDecrement = () => {
    clearInterval(timer);
    const id = setInterval(() => {
      setCount((c) => c - 1)
    }, 1000);
    setTimer(id)
  }

  const handlePause = () => {
    clearInterval(timer)

  }

  const handleReset = () => {
    clearInterval(timer)
    setCount(0);
  }


  return (
    <>
      <div className='main-container flex flex-col gap-10 h-screen  items-center  bg-gradient-to-t from-[#da3068] to-[#14469f] '>


        <div className='counter bg-black/50 rounded-lg w-40 flex items-center border-2 border-gray-300 shadow-2xl justify-center p-8 shadow-black/50 text-white backdrop-blur-md mt-10'>
          <h1 className=' text-3xl font-bold'>{count}</h1>
        </div>


        <div className='buttons  md:space-x-3 space-x-3  grid grid-cols-2 md:grid-cols-4'>
          <button
            onClick={handleIncrement}

            className='bg-yellow-400 hover:bg-red-500 text-black  hover:underline border border-yellow-600 shadow-2xl shadow-black/50 w-35 px-2 py-1'
          >
            Auto Increment
          </button>
          <button
            onClick={handleDecrement}
            className='bg-yellow-400 hover:bg-yellow-500 text-black  border hover:underline border-yellow-600 shadow-2xl shadow-black/50 w-35 px-2 py-1'
          >
            Auto Decrement
          </button>
          <button
            onClick={handlePause}
            className='bg-yellow-400 mt-2 md:mt-0 hover:bg-yellow-500  hover:underline text-black border border-yellow-600 shadow-2xl shadow-black/50 w-35 px-2 py-1'
          >
            Pause
          </button>

          <button
            onClick={handleReset}
            className='bg-yellow-400 mt-2 md:mt-0 hover:bg-yellow-500  hover:underline text-black border border-yellow-600 shadow-2xl shadow-black/50 w-35 px-2 py-1'
          >
            Reset
          </button>
        </div>
      </div>
    </>
  )
}

export default App