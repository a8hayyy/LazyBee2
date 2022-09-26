import React from 'react'
import './Intro.css'
import intro from '../../Assets/pngegg.png'

function Intro() {
  return (
    <div className='intro-container'>
        <div className='intro-image-container'>
            <img src={intro} alt=''/>
        </div>
        <div className='intro-text-container'>
            <div className='intro-heading'>
                <h1>How It Works!</h1>
            </div>
            <div className='intro-text'>
                <p>- You create a list of items</p>
                <p>- Forward list to us on WhatsApp</p>
                <p>- We'll collect all the items and delivery it to you</p>
                <p>- Pay on delivery</p>
            </div>
        </div>
    </div>
  )
}

export default Intro