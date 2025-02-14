"use client"
import React, { useState } from 'react';
import { MapPin, Navigation, X, ArrowRight, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import TripDetails from '../TripDetails/TripDetails';
const TripForm = () => {
  const [pickUp, setPickUp] = useState("");
  const [dropOff, setDropOff] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [tripDetail,setTripDetails] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    console.log("done")
    setTripDetails(true)
    setTimeout(() => 
      setIsLoading(false), 1500
  );
    
  };

  return (
    <div className="max-w-xl backdrop-blur-md rounded-2xl ">
      {
        tripDetail ?
             <TripDetails/> :
   
      <form onSubmit={handleSubmit} className="space-y-4" >
        <br>
        </br>
        <br>
        </br> <br>
        </br> <br>
        </br> <br>
        </br> <br>
        </br>
        <div className="relative">
          <motion.div 
            className={`flex items-center p-3 bg-white rounded-xl shadow-sm transition-all duration-200 ${pickUp ? 'ring-2 ring-blue-500' : 'hover:shadow-md'}`}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            <MapPin className="w-5 h-5 text-blue-500" />
            <input
              type="text"
              value={pickUp}
              onChange={(e) => setPickUp(e.target.value)}
              placeholder="Pickup Location"
              className="flex-1 ml-3 outline-none text-gray-700 placeholder-gray-400"
            />
            {pickUp && (
              <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                type="button"
                onClick={() => setPickUp("")}
                className="p-1 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-4 h-4 text-gray-400" />
              </motion.button>
            )}
          </motion.div>
        </div>

        <div className="relative">
          <motion.div 
            className={`flex items-center p-3 bg-white rounded-xl shadow-sm transition-all duration-200 ${dropOff ? 'ring-2 ring-blue-500' : 'hover:shadow-md'}`}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            <Navigation className="w-5 h-5 text-blue-500" />
            <input
              type="text"
              value={dropOff}
              onChange={(e) => setDropOff(e.target.value)}
              placeholder="Dropoff Location"
              className="flex-1 ml-3 outline-none text-gray-700 placeholder-gray-400"
            />
            {dropOff && (
              <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                type="button"
                onClick={() => setDropOff("")}
                className="p-1 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-4 h-4 text-gray-400" />
              </motion.button>
            )}
          </motion.div>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`w-full p-3 rounded-xl font-semibold text-white 
            ${isLoading ? 'bg-blue-400' : 'bg-blue-500 hover:bg-blue-600'} 
            transition-colors duration-200 flex items-center justify-center space-x-2`}
          disabled={isLoading || !pickUp || !dropOff}
        >
          {isLoading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Calculating...</span>
            </>
          ) : (
            <>
              <span>See Price</span>
              <ArrowRight className="w-5 h-5" />
            </>
          )}
        </motion.button>
      </form>
    }
    </div>
  );
};

export default TripForm;