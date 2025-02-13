"use client";
import React from 'react'
import './MainContent.css'
import Login from '../LoginComponent/Login';
import TripDetails from '../TripDetails/TripDetails';
import Map from '../Map/Map';
function MainContent() {
  return (
    <div className='mainContent'>
      
        <div className='tripForm'>
          {/* <form action="" className='tripContainer'>
            <div><input id='tripLoc' type="text"  placeholder='Pickup Location'/></div>
            <div> <input id='tripLoc' type="text" placeholder='Dropoff Location'/></div>
            <div><button id='seePrice'>see pirce</button></div>
          </form> */}

          {/* <Login/> */}
          <TripDetails/>

        </div>
        <div className='tagLine'>
          {/* <div className='tagLineContent'>
            <h1 id='heading'>𝙎𝙖𝙣𝙘𝙝𝙖𝙧𝙞</h1>
            <h1>𝑮𝒐 𝑾𝒉𝒆𝒏 𝒆𝒗𝒆𝒓</h1>
            <h1>𝑾𝒉𝒆𝒏 𝒆𝒗𝒆𝒓</h1> */}
          {/* </div> */}
        <Map/>
        </div>
    </div>
  )
}

export default MainContent