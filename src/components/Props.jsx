import React from 'react'

export default function Props(props) {
    const topic= props.food;
    const price=props.price;
  return (
    <div>
        <div className='header'>
            <span className='header-text'>
                {topic},{price}
            </span>
            {props.children}
        </div>
    </div>
  )
}
