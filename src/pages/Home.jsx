import React from 'react'
import './home.css'
import Header from '../components/Header'


export default function Home() {
  return (
    <div>
      <div className='content'>
      <p>
       It seems like you're asking about React, the JavaScript library for building user interfaces. React is widely used for creating interactive and dynamic web applications. With React, developers can build reusable UI components and manage the state of their application efficiently. If you have any specific questions about React or need more information, feel free to ask!
       </p>
       <div>
        <Header food='kottu' price='450'>
            <span>
                HII
            </span>
        </Header>
        <Header food='rice' price='500'/>
        <Header food='hopper' price='15'/>
       </div>
      </div>
    </div>
  )
}
