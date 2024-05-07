import React from 'react'
import './header.css'


export default function Header(props) {
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
