import React from 'react'
import './count.css';
import { useState } from 'react';

export default function Count() {

    const [count,setCount] = useState(0);
    const increment=()=>{
        setCount(count+1)
    }

    const decrement=()=>{
        setCount(count-1)
    }
  return (
    <div className='title'>My counter
        <div>
            <p className='subtitle'>counter={count}</p>
            <button className='plus' onClick={increment}>+</button>
            <button className='plus' onClick={decrement}>-</button>
        </div>
    </div>
  )
}
