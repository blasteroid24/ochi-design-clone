import { motion } from 'framer-motion';
import React from 'react';

const LoadingCard = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-zinc-900">
      <motion.div
        className="relative w-80 h-48 bg-opacity-20 bg-zinc-800 backdrop-blur-lg rounded-lg shadow-lg border border-gray-700 flex flex-col justify-center items-center"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Circular Glowing Loader */}
        <div className="relative">
          <div className="absolute inset-0 animate-ping rounded-full border-4 border-white opacity-30"></div>
          <div className="w-16 h-16 border-t-4 border-gray-100 border-solid rounded-full animate-spin"></div>
        </div>
        
        <p className="text-gray-300 text-lg font-semibold mt-5">Loading...</p>
      </motion.div>
    </div>
  );
};

export default LoadingCard;
