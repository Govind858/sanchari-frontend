import React from 'react';
import { motion } from 'framer-motion';

const TagLine = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br  p-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 hover:scale-105 transition-transform cursor-pointer">
          Sanchari
        </h1>
        
        <div className="space-y-4">
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-8xl font-bold text-white tracking-tight hover:tracking-wide transition-all"
          >
            Go wherever.
          </motion.h2>
          
          <motion.h2 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-5xl md:text-8xl font-bold text-white tracking-tight hover:tracking-wide transition-all"
          >
            whenever.
          </motion.h2>
        </div>
      </motion.div>
    </div>
  );
};

export default TagLine;