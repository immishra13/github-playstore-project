import React from 'react';
import { motion } from 'framer-motion';

const SlideWrapper = ({ children, direction = 1 }) => {
  // Determine animation variants based on direction of navigation
  const variants = {
    initial: {
      opacity: 0,
      y: direction > 0 ? 50 : -50,
      scale: 0.96,
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // easeOutExpo
        staggerChildren: 0.1,
      }
    },
    exit: {
      opacity: 0,
      y: direction > 0 ? -50 : 50,
      scale: 1.04,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      }
    }
  };

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
      }}
    >
      {children}
    </motion.div>
  );
};

export default SlideWrapper;
