import React from 'react'
import Items from '../../Components/Items/Items'
import './Fruit.css'

function Fruit() {
  return (
    <div className='fruit-container'>
    <div className='fruit-heading-container'>
        <h1>FRUITS</h1>
    </div>
    <div className='fruit-item-container'>
        <Items name="Apple" price='100/Kg'/>
        <Items name="Banana" price='50/Dzn'/>
        <Items name="Mango" price='80/Kg'/>
        <Items name="Papaya" price='40/Kg'/>
        <Items name="Orange" price='50/Kg'/>
        <Items name="Watermellon" price='80/Kg'/>
        <Items name="Grapes" price='90/Kg'/>
        <Items name="Cherry" price='150/Box'/>
        <Items name="Pineapple" price='80/Kg'/>
        <Items name="Elderberry" price='140/Kg'/>
        <Items name="Melon" price='60/Kg'/>
        <Items name="Sapodila" price='60/Kg'/>
        <Items name="Pomegranate" price='60/Kg'/>
      </div>
    </div>
  )
}

export default Fruit