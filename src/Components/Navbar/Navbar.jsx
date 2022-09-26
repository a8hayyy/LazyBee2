import React from 'react'
import "./Navbar.css"

function Navbar() {
  return (
    <nav className='navbar'>
        <div className='navbar-container'>
           {/* <img className='logo' /> */}
           <h1 className='name'>LazyBee</h1>
        </div>
    </nav>
  )
}

export default Navbar