import React from 'react'
import Items from '../../Components/Items/Items'
import './Vegetable.css'

function Vegetable() {
  return (
    <div className='vegetable-container'>
    <div className='vegetable-heading-container'>
        <h1>VEGETABLES</h1>
    </div>
    <div className='vegetable-item-container'>
        <Items name="Onion"/>
        <Items name="Potato"/>
        <Items name="Lady Finger"/>
        <Items name="Tomato"/>
        <Items name="Carrot"/>
        <Items name="Cabbage"/>
        <Items name="Cauli Flower"/>
        <Items name="Cucmber"/>
        <Items name="Beetroot"/>
        <Items name="Garlic"/>
        <Items name="Ginger"/>
        <Items name="Beans"/>
        <Items name="Karela"/>
        <Items name="Lauki"/>
        <Items name="Pea"/>
        <Items name="Capsicum"/>
        <Items name="Broccoli"/>
        <Items name="Mushroom"/>
    </div>
    </div>
  )
}

export default Vegetable