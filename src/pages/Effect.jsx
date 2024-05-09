import React, { useEffect, useState } from 'react'

export default function Effect() {
    const [count,setCount]=useState(0);
    const[array,setArray] = useState([]);
    
   useEffect(()=>{
    setArray(array.push(count))
   },[count])
        
    console.log(array)

    const increment = ()=>{
        setCount(count+1);
    }

    const decrement = ()=>{
        setCount(count-1)
    }
  return (
    
    <div>
        <div>
            count={count}
        </div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
    </div>
  )
}
