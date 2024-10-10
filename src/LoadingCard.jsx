import React from 'react';
import { motion } from 'framer-motion';

const LoadingCard = () => {
  const loadingContainerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: [0, 1],
      transition: {
        duration: 1,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'mirror',
      },
    },
  };

  return (
    <div className="loading-container">
      <motion.div
        className="loading-card"
        variants={loadingContainerVariants}
        initial="initial"
        animate="animate"
      >
        <motion.div
          className="loading-bar"
          animate={{ width: ["0%", "100%"] }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror"
          }}
        />
      </motion.div>
      <style jsx>{`
        .loading-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-color: #f0f0f0;
        }
        .loading-card {
          width: 300px;
          height: 200px;
          background-color: #fff;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          border-radius: 12px;
          overflow: hidden;
        }
        .loading-bar {
          position: absolute;
          bottom: 0;
          height: 4px;
          background-color: #3498db;
        }
      `}</style>
    </div>
  );
};

export default LoadingCard;
