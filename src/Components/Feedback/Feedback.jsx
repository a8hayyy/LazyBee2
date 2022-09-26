import React from 'react'
import ReviewCard from '../ReviewCard/ReviewCard'
import img1 from '../../Assets/boy1.jpg'
import img2 from '../../Assets/boy2.jpg'
import img3 from '../../Assets/boy3.jpg'
import './Feedback.css'

function Feedback() {
  return (
    <div className='feedback-container'>
        <div className='feedback-heading-container'>
            <h1>Reviews</h1>
        </div>
        <div className='feedback-card-container'>
            <ReviewCard name="ABHAY" image={img1} content="This page was very helpfull in solving my instance need and requirement for day to life survival"/>
            <ReviewCard name="ASHWIN" image={img2} content="This page was very helpfull in solving my instance need and requirement for day to life survival"/>
            <ReviewCard name="ROHIT" image={img3} content="This page was very helpfull in solving my instance need and requirement for day to life survival"/>
        </div>
    </div>
  )
}

export default Feedback