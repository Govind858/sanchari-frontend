"use client";
import React from 'react'
import './MainContent.css'
import Login from '../LoginComponent/Login';
import TripDetails from '../TripDetails/TripDetails';
import Map from '../Map/Map';
import TagLine from '../TagLine/TagLine';
import TripForm from '../TripForm/TripForm';
function MainContent() {
  return (
    <div className='mainContent'>
      
        <div className='tripForm'>
             <TripForm/>
        </div>
        <div className='tagLine'>
               <TagLine/>
        {/* <Map/> */}
        </div>
    </div>
  )
}

export default MainContent