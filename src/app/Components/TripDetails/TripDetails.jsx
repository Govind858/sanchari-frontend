import React, { useState } from "react";
import DriverModal from "../DriverModal/DriverModal"; // Ensure the correct path
import './trip.css'
const TripDetails = ({ from, to, estimatedTime, totalKm, rate }) => {
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setShowModal(true); // Open the modal after search is done
    }, 2000);
  };

  return (
    <div className="p-4 mt-1 ml-4">
      <div className="h-[80vh] flex items-start bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="w-[400px] bg-white  shadow-xl overflow-hidden">
          {/* Header */}
          <div className="p-4">
            <div className="flex flex-col items-center space-y-2">
              <h2 className="text-3xl font-bold text-gray-900">Trip Details</h2>
              <div className="h-1 w-20 bg-blue-500 rounded-full" />
            </div>
           

          </div>
         
          {/* Trip Info */}
          <div className="p-6 space-y-4">
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-xl transition-all duration-200 shadow-md">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A2 2 0 013 15.382V6a2 2 0 011.106-1.789l6-3a2 2 0 011.788 0l6 3A2 2 0 0119 6v9.382a2 2 0 01-1.553 1.894L12 20l-3-1.5" />
                </svg>
                <span>View Maps</span>
            </button>
            <div className="relative py-2">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200" />
              <div className="space-y-6">
                {/* From Location */}
                <div className="flex items-center relative">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="3" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-semibold text-gray-500">From</div>
                    <div className="text-lg font-bold text-gray-900">{from} Kaloor</div>
                  </div>
                </div>

                {/* To Location */}
                <div className="flex items-center relative">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-semibold text-gray-500">To</div>
                    <div className="text-lg font-bold text-gray-900">{to} Ealamkulam</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Trip Duration & Distance */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-xl">
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm text-gray-600">Duration</span>
                </div>
                <div className="mt-1 font-bold text-gray-900">{estimatedTime}10 mints</div>
              </div>

              <div className="bg-purple-50 p-4 rounded-xl">
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span className="text-sm text-gray-600">Distance</span>
                </div>
                <div className="mt-1 font-bold text-gray-900">{totalKm} 7    km</div>
              </div>
            </div>

            {/* Total Rate */}
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-4 rounded-xl text-white">
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-sm opacity-90">Total Rate</div>
                  <div className="text-2xl font-bold">₹ {rate} 120   </div>
                </div>
                {/* <button className="btnAdd">+5</button>Negotiate */}
                <div className="text-3xl font-bold">→</div>
              </div>
            </div>

            {/* Action Button */}
            <button
              onClick={handleClick}
              disabled={loading}
              className={`w-full bg-black hover:bg-gray-800 text-white py-3 px-6 rounded-xl transition-all duration-200 flex items-center justify-center space-x-2 ${
                loading ? "opacity-75 cursor-not-allowed" : ""
              }`}
            >
              {loading ? (
                <>
                  <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" strokeWidth="4" className="opacity-25" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 108 8h-4l3 3 3-3h-4a8 8 0 01-8 8z" />
                  </svg>
                  <span>Searching...</span>
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <span className="font-semibold">Find Available Drivers</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Driver Modal */}
      <DriverModal 
        isOpen={showModal} 
        onClose={() => setShowModal(false)} 
        driver={{
          name: "John Doe",
          image: "https://randomuser.me/api/portraits/men/45.jpg",
          rating: 4,
          pickup: from,
          destination: to,
          estimatedTime: "15 mins",
          distance: totalKm,
          fare: rate,
        }}
      />
    </div>
  );
};

export default TripDetails;
