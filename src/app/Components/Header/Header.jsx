"use client"
import React, { useState } from 'react'
import './Header.css'

function Header({LoginChanges}) {
  const [Login,setLogin] = useState(false)
  const LoginTogle = ()=>{
console.log(Login)
    if(Login){
      setLogin(false)
    }else{
      setLogin(true)
    }
    LoginChanges(Login)
  }
  return (
    <div className='header'>
        <div className='logo'>
            <h1>Sanchari</h1>
        </div>
        <div><button id='signup' onClick={LoginTogle}>sign up</button></div>
    </div>
  )
}

export default Header 