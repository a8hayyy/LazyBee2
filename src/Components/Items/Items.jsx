import React from 'react'
import './Items.css'

function Items({name,price}) {
  return (
    <div className='item-container'>
        <div className='item-name-container'>
            <h2>{name}</h2>
        </div>
        <div className='item-price-container'>
            <h4>Price</h4>
            <p>₹{price}</p>
        </div>
    </div>
  )
}

export default Items