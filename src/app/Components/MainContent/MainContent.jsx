"use client";
import React from 'react'
import './MainContent.css'

function MainContent() {
  return (
    <div className='mainContent'>
      
        <div className='tripForm'>
          <form action="" className='tripContainer'>
            <div><input id='tripLoc' type="text"  placeholder='Pickup Location'/></div>
            <div> <input id='tripLoc' type="text" placeholder='Dropoff Location'/></div>
            <div><button id='seePrice'>see pirce</button></div>
          </form>
        </div>
        <div className='tagLine'>
          <div className='tagLineContent'>
            <h1 id='heading'>Sanchari</h1>
            <h1 >Go wherever.</h1>
            <h1 >whenever.</h1>
          </div>
        </div>
    </div>
  )
}

export default MainContent