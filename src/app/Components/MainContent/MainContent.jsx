"use client";
import React, { useState } from 'react'
import './MainContent.css'
import Login from '../LoginComponent/Login';
import TripDetails from '../TripDetails/TripDetails';
import Map from '../Map/Map';
import TagLine from '../TagLine/TagLine';
import TripForm from '../TripForm/TripForm';
import Header from '../Header/Header';
function MainContent() {
  const [LoginState,setloginState] = useState(false)
  const handleLoginChange = (LoginState)=>{
    setloginState(LoginState)
    console.log(LoginState,"new state in new componet")
  }
  return (
   <>
   <Header LoginChanges={handleLoginChange}/>
     <div className='mainContent'>
    
    <div className='tripForm' >
      {
        LoginState ? 
        <Login/> :
        <TripForm/>
      }
         
    </div>
    <div className='tagLine'>
           <TagLine/>
    {/* <Map/> */}
    </div>
</div>
   </>
  )
}

export default MainContent