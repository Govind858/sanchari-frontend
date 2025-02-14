import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Clock, Star, X, Car, Phone, Shield, MessageSquare } from "lucide-react";

const DriverModal = ({ isOpen, onClose, driver }) => {
  if (!isOpen || !driver) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="bg-white rounded-3xl p-6 w-full max-w-md shadow-2xl relative"
          onClick={e => e.stopPropagation()}
        >
          {/* Close Button */}
          <motion.button
            whileHover={{ rotate: 90 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          >
            <X size={24} />
          </motion.button>

          {/* Driver Details */}
          <div className="flex flex-col items-center mb-6">
            <motion.div 
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="relative"
            >
              <div className="w-24 h-24 rounded-full overflow-hidden ring-4 ring-blue-100 mb-3">
                <img
                  src={driver.image || "/api/placeholder/96/96"}
                  alt={driver.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 bg-green-500 w-6 h-6 rounded-full border-2 border-white" />
            </motion.div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-1">{driver.name}</h3>
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className={`${
                    i < driver.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300 fill-gray-300"
                  }`}
                />
              ))}
              <span className="ml-2 text-gray-600 text-sm font-medium">
                {driver.rating}/5 ({driver.totalRides} rides)
              </span>
            </div>
            
            <div className="flex gap-3 mb-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100"
              >
                <Phone size={20} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100"
              >
                <MessageSquare size={20} />
              </motion.button>
            </div>
          </div>

          {/* Trip Details */}
          <div className="bg-gray-50 rounded-2xl p-4 mb-4 space-y-3">
            <div className="flex items-start gap-3">
              <div className="mt-1">
                <MapPin className="text-blue-500" size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Pickup Location</p>
                <p className="text-gray-900 font-medium">{driver.pickup}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="mt-1">
                <MapPin className="text-red-500" size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Destination</p>
                <p className="text-gray-900 font-medium">{driver.destination}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="bg-white p-3 rounded-xl">
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-1">
                  <Clock size={16} />
                  <span>Duration</span>
                </div>
                <p className="font-semibold">{driver.estimatedTime}</p>
              </div>
              
              <div className="bg-white p-3 rounded-xl">
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-1">
                  <Car size={16} />
                  <span>Distance</span>
                </div>
                <p className="font-semibold">{driver.distance} km</p>
              </div>
            </div>
          </div>

          {/* Price */}
          <div className="flex justify-between items-center mb-6">
            <div>
              <p className="text-gray-500 text-sm">Total Fare</p>
              <p className="text-2xl font-bold text-gray-900">${driver.fare}</p>
            </div>
            <div className="flex items-center text-green-600 bg-green-50 px-3 py-1 rounded-full">
              <Shield size={16} className="mr-1" />
              <span className="text-sm font-medium">Best Price</span>
            </div>
          </div>

          {/* Book Now Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold shadow-lg shadow-blue-200 transition-all duration-200"
          >
            Book Now
          </motion.button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default DriverModal;