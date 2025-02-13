"use client"
import React, { useState } from 'react'
import './TripForm.css'

function TripForm() {
  const [pickUp,setPickUp] =useState("");
  const [dropOff,setDropOff] = useState("")

  const clearPickUp = () =>{
     setPickUp("")
  }
  const clearDropOff = () => {
    setDropOff("")
  }
  return (
    <div className='tripForm'>
        <form action="" className='tripContainer'>
        <div className='item'>
                  <input 
                  id='pickUp'
                  className='tripLoc'
                  value={pickUp}
                  type="text"
                  placeholder='Pickup Location'
                  onChange={(e) => setPickUp(e.target.value)}/>

                  {pickUp &&(
                    <button id='clearBtn' onClick={clearPickUp} type='button'>✖</button>
                  )}
          </div>
          <div className='item'>
                    <input 
                    id='dropOff'
                    className='tripLoc'
                    value={dropOff}
                    type="text" 
                    placeholder='Dropoff Location'
                    onChange={(e) => setDropOff(e.target.value)}/>

                    {dropOff &&(
                      <button id='clearBtn'onClick={clearDropOff} type='button'>✖</button>
                    )}
                    
        </div>

        <div><button id='seePrice'>see pirce</button></div>
        </form>

  </div>
  )
}

export default TripForm