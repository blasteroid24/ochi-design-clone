import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (
    
    <div data-scroll data-scroll-section data-scroll-speed=".2" className='w-full py-6 bg-[#004d43]  rounded-tl-3xl rounded-tr-3xl'>
        <div className="text border-t-2 border-b-2 border-zinc-500 mt-10 flex whitespace-nowrap overflow-hidden">
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ ease: "linear", repeat: Infinity, duration: 8 }} className="text-[22vw] leading-none font-blehch font-semibold uppercase pr-6">WE ARE OCHI </motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ ease: "linear", repeat: Infinity, duration: 8 }} className="text-[22vw] leading-none font-blehch font-semibold uppercase pr-6">WE ARE OCHI </motion.h1>     
        </div>
    </div>
  ) 
}

export default Marquee