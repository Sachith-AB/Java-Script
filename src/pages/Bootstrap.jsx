import React from 'react'


export default function Bootstrap() {
    const click =()=>{
        console.log('click')
        alert('Button is clicked')
    }
  return (
   <div>
    <h1>Head 1</h1>
    <br /><hr />
    <button onClick={click}>click here</button>
   </div>
  )
}
