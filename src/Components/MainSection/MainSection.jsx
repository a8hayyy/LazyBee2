import React from 'react'
import './MainSection.css'
import mainImg from "../../Assets/main-photo.jpg"


function MainSection() {
  return (
    <div className='main-section-container'>
        <div className='main-text'>
            <h1>Bee Lazy,</h1>
            <h1>We'll get it done!</h1>
            <div className='steps-container'>
                <h3>- Shop from all your near by stores here</h3>
                <h3>- Order Fruits, Vegetables, Drinks, Food and many more...</h3>
            </div>
            <div className='button-container'>
            <button href='#deliver-container' style={{backgroundColor:'#3f4f87'}}>Products</button>
            <button href='#footer-container' style={{backgroundColor:'#1a8d26'}}>Contact</button>
            </div>
        </div>
        <img src={mainImg}/>
    </div>
  )
}

export default MainSection