import React, {useState} from 'react'

function Counter() {
    const [count, setCount] = useState(0)


    const handleIncrement =()=>{

    }
    const handleDecrement =()=>{
      
    }
    const handlePause =()=>{
      
    }
    const handleReset =()=>{
      
    }
    return (
        <>
            <div className='container  '>

                {/* counter */}
                <div className='counter'>
                    <h1>{count}</h1>
                </div>

                {/* buttons */}
                <div>
                    <button onClick={handleIncrement}>Auto Increment</button>
                    <button onClick={handleDecrement}>Auto Decrement</button>
                    <button onClick={handlePause}>Pause</button>
                    <button onClick={handleReset}>Reset </button>
                </div>
            </div>
        </>
    )
}

export default Counter