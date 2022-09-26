import React from 'react'
import Card from '../Card/Card'
import './Delivery.css'
import stationary from '../../Assets/Stationary4.jpg'
import grocery from '../../Assets/grocery1.jpg'
import medi from '../../Assets/pharma2.jpg'
import fruit from '../../Assets/fruit1.jpg'
import food from '../../Assets/food9.jpg'
import vegetable from '../../Assets/vege4.jpg'
import colddrink from '../../Assets/drink5.jpg'
import snack from '../../Assets/snack1.jpg'
import cigarette from '../../Assets/cigarette.jpg'
import beer from '../../Assets/beer5.jpg'

function Delivery() {
    return (
        <>
            <div className='delivery-container'>
                <div className='delivery-heading'>
                    <h1>Delivery Options</h1>
                </div>
                <div className='delivery-product-container'>
                    <Card image={stationary} name="" btnName='All Items'/>
                    <Card image={grocery} name="grocery" btnName='Explore'/>
                    <Card image={medi} name="" btnName='All Items'/>
                    <Card image={fruit} name='fruit' btnName='Explore'/>
                    <Card image={vegetable} name='vegetable' btnName='Explore'/>
                    <Card image={food} name='food' btnName='Explore'/>
                    <Card image={colddrink} name="" btnName='All Items'/>
                    <Card image={snack} name="snack" btnName='Explore'/>
                    <Card image={cigarette} name="" btnName='All Items'/>
                    <Card image={beer} name="" btnName='All Items'/>
                </div>
            </div>
        </>
    )
}

export default Delivery
