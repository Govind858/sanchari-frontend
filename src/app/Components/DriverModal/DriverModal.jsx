import React from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Star, X } from "lucide-react";

const DriverModal = ({ isOpen, onClose, driver }) => {
  if (!isOpen || !driver) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl relative"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-all"
        >
          <X size={24} />
        </button>

        {/* Driver Details */}
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-16 h-16 rounded-full bg-gray-100 overflow-hidden">
            <img
              src={driver.image || "/default-driver.png"}
              alt={driver.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">{driver.name}</h3>
            <div className="flex items-center text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className={i < driver.rating ? "fill-yellow-400" : "fill-gray-300"}
                />
              ))}
              <span className="ml-2 text-gray-600">{driver.rating}/5</span>
            </div>
          </div>
        </div>

        {/* Trip Details */}
        <div className="text-gray-700 space-y-2">
          <p className="flex items-center space-x-2">
            <MapPin className="text-blue-500" size={20} />
            <span><strong>Pickup:</strong> {driver.pickup}</span>
          </p>
          <p className="flex items-center space-x-2">
            <MapPin className="text-red-500" size={20} />
            <span><strong>Destination:</strong> {driver.destination}</span>
          </p>
          <p className="flex items-center space-x-2">
            <Clock className="text-green-500" size={20} />
            <span><strong>Estimated Time:</strong> {driver.estimatedTime}</span>
          </p>
          <p><strong>Distance:</strong> {driver.distance} km</p>
          <p><strong>Fare:</strong> ${driver.fare}</p>
        </div>

        {/* Book Now Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 mt-4 rounded-xl transition-all duration-200"
        >
          Book Now
        </motion.button>
      </motion.div>
    </div>
  );
};

export default DriverModal;
