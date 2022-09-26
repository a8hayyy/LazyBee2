import React from 'react'
import Items from '../../Components/Items/Items'

function Food() {
  return (
    <>
    <div className='food-heading-container'>
        <h1>FOOD</h1>
    </div>
    <div className='fruit-item-container'>
        <Items name="Apple" price='100/Kg'/>
        <Items name="Mango" price='80/Kg'/>
        <Items name="Papaya" price='40/Kg'/>
        <Items name="Orange" price='50/Kg'/>
        <Items name="Watermellon" price='80/Kg'/>
        <Items name="Grapes" price='90/Kg'/>
        <Items name="Apple" price='100/Kg'/>
        <Items name="Mango" price='80/Kg'/>
        <Items name="Papaya" price='40/Kg'/>
        <Items name="Orange" price='50/Kg'/>
        <Items name="Watermellon" price='80/Kg'/>
      </div>
    </>
  )
}

export default Food