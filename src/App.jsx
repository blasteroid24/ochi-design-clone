import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Nvarbar from './Nvarbar';
import Landing from './Landing';
import Marquee from './Marquee';
import About from './About';
import Eyes from './Eyes';
import Featuredprojects from './Featuredprojects';
import Reviews from './Reviews';
import Cards from './Cards';
import Readyeye from './Readyeye';
import Footer from './Footer';
import LocomotiveScroll from 'locomotive-scroll';
import LoadingCard from './LoadingCard';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize LocomotiveScroll
    const locomotiveScroll = new LocomotiveScroll();

    // Simulate loading state with a timeout
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust the delay according to actual load time

    return () => clearTimeout(timer);
  }, []);

  return (
    
    <div className='min-h-screen w-full text-white bg-zinc-900'>
      {isLoading ? (
        <LoadingCard /> // Display the loading card while content is loading
      ) : (
        <>
          <Nvarbar />
          <Landing />
          <Marquee />
          <About />
          <Eyes />
          <Featuredprojects />
          <Reviews />
          <Cards />
          <Readyeye />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
