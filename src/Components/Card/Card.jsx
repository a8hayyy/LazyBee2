import React from 'react'
import {Link} from 'react-router-dom'
import './Card.css'

function Card({image, name, btnName}) {

  var c = (btnName==="Explore")? "#21758d":"#14c07b";
  var address = '/'+name;
  var x = (btnName==="Explore" || btnName==="All Items");
  

  return (
    <div className='card-container'>
        <div className='card'>
              <div className='card_image'>
                <img src={image} alt=""/>
              </div>
              <div className='card_title'>
                
              </div>
        </div>

        
        {(x)?(
          <div className='card-btn' >
          <Link to={address}>
            <button  style={{backgroundColor:c}}>{btnName}</button>
          </Link>
        </div>
        ):(
          <div></div>
        )}
    </div>
  )
}

export default Card