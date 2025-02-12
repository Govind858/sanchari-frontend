import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='header'>
        <div className='logo'>
            <h1>Sanchari</h1>
        </div>
        <div><button id='signup'>sign up</button></div>
    </div>
  )
}

export default Header