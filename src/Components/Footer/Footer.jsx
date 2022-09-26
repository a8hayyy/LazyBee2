import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer_container'>
        <div className='footer-row'>
            <div className='footer-col'>
                <div className='footer-col-name'>
                    <h2>Company</h2>
                </div>
                <ul>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Delivery Menu</a></li>
                    <li><a  >Services Menu</a></li>
                </ul>
            </div>
            <div className='footer-col'>
                <div className='footer-col-name'>
                    <h2>Contact</h2>
                </div>
                <ul>
                    <li><a href='#'>Gmail</a></li>
                    <li><a href='#' style={{fontSize:"2rem"}}>Lazybee.service@gmail.com</a></li>
                    <li><a href='#'>WhatsApp</a></li>
                    <li><a href='#' style={{fontSize:"2rem"}}>8764896687</a></li>
                </ul>
            </div>
            <div className='footer-col'>
                <div className='footer-col-name'>
                    <h2>Follow</h2>
                </div>
                <div className='follow-links'>
                    <ul>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-whatsapp"></i>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer