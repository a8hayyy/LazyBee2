import React from 'react'
import './ReviewCard.css'

function ReviewCard({name, image,content}) {
  return (
    <div className='reviewcard-container'>
        <div className='top-container'>
            <div className='reviewcard-image-container'>
                <img src={image}/>
            </div>
        </div>
        <div className='bottom-container'>
            <h1>{name}</h1>
            <div className='msg-container'>
                <p>"{content}"</p>
            </div>
        </div>
    </div>
  )
}

export default ReviewCard