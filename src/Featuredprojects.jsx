
import React, { useState } from 'react'
import { motion, useAnimation } from 'framer-motion';

function Featuredprojects() {

  const cards = [useAnimation(), useAnimation(),useAnimation(), useAnimation()]
  const handlehover = (index) => {
    cards[index].start({ y: "0" });
  };
  const handlehoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };
  return (
    <div   className='w-full py-20 relative'>
      <h1 className='w-full px-20 border-b-[1px] border-zinc-700 pb-20 text-5xl'>Featured projects</h1>
      <div className="card p-10 relative">

        <div className='relative flex p-10'>
          <motion.div onHoverStart={() => handlehover(0)} onHoverEnd={() => handlehoverEnd(0)} className='w-1/2 relative'>
            <ul className='list-disc pl-5 pb-5 '><li className='uppercase'>Cardboard Spaceship</li></ul>
            <div ><img className="rounded-3xl" src="card1.jpg" /></div>

            <div className='absolute overflow-hidden flex left-full -translate-x-1/2 top-1/2 -translate-y-1/2 text-[#cdea68] w-max h-max text-7xl leading-none tracking-tighter z-10'>{"CARDBOARD SPACESHIP".split("").map((item, index) =>
              <motion.span
                initial={{ y: "100%" }}
                animate={cards[0]}
                transition={{ ease: [0.33, 1, 0.68, 1], delay: index * .03 }}
                className='inline-block'>{item}</motion.span>)}</div>

            <div className='relative flex gap-5 pt-8 min-h-min flex-wrap'>
              {['BRANDED TEMPLATE', 'SALE DECK', 'SOCIAL MEDIA TEMPLATES'].map((item, index) => {
                return <button key={index} className='rounded-3xl border-2 text-[14px] border-zinc-300 text-white font-bold px-3 py-2 inline-block min-w-min'>{item}</button>
              })}
            </div>
          </motion.div>

          <motion.div onHoverStart={() => handlehover(1)} onHoverEnd={() => handlehoverEnd(1)} className='w-1/2 relative'>
            <ul className='list-disc pl-5 pb-5 '><li className='uppercase'>AH2 & MATT HORN</li></ul>
            <img className="rounded-3xl" src="public/card2.jpg" />


            <div className='overflow-hidden flex absolute right-full translate-x-1/2 top-1/2 -translate-y-1/2 text-[#cdea68] w-max h-max text-7xl leading-none tracking-tighter z-10'>{"AH2 & MATT HORN".split("").map((item, index) =>
              <motion.span
                initial={{ y: "100%" }}
                animate={cards[1]}
                transition={{ ease: [0.33, 1, 0.68, 1], delay: index * .03 }}
                className='inline-block'>{item}</motion.span>)}</div>

            <div className='relative flex gap-5 pt-8 min-h-min flex-wrap'>
              {['PITCH DECK'].map((item, index) => {
                return <button key={index} className='rounded-3xl border-2 text-[14px] border-zinc-300 text-white font-bold px-3 py-2 inline-block min-w-min'>{item}</button>
              })}
            </div>
          </motion.div>

        </div>




        <div className='relative flex p-10'>
          <motion.div onHoverStart={() => handlehover(2)} onHoverEnd={() => handlehoverEnd(2)} className='w-1/2 relative'>
            <ul className='list-disc pl-5 pb-5 '><li className='uppercase'>FYDE</li></ul>
            <img className="rounded-3xl" src="public/img12.jpg" />
            <div className='relative flex gap-5 pt-8 min-h-min flex-wrap'>
              {['AUDIT', 'COPYWRITING', 'SALE DESK', 'SLIDES DESIGN'].map((item, index) => {
                return <button key={index} className='rounded-3xl border-2 text-[14px] border-zinc-300 text-white font-bold px-3 py-2 inline-block min-w-min'>{item}</button>
              })}
            </div>
            <div className='absolute flex overflow-hidden left-full -translate-x-1/2 top-1/2 -translate-y-1/2 text-[#cdea68] w-max h-max text-7xl leading-none tracking-tighter z-10'>{"FYDE".split("").map((item, index) =>
              <motion.span
              initial={{ y: "100%" }}
              animate={cards[2]}
              transition={{ ease: [0.33, 1, 0.68, 1], delay: index * .03 }}
              className='inline-block'>{item}</motion.span>)}</div>




          </motion.div>
          
          <motion.div onHoverStart={() => handlehover(3)} onHoverEnd={() => handlehoverEnd(3)} className='w-1/2 relative'>
            <ul className='list-disc pl-5 pb-5 '><li className='uppercase'>VISE</li></ul>
            <img className="rounded-3xl" src="public/Vise_front2-663x551.jpg" />
            <div className='relative flex gap-5 pt-8 min-h-min flex-wrap'>
              {['AGENCY', 'COMPANY PRESENTATION'].map((item, index) => {
                return <button key={index} className='rounded-3xl border-2 text-[14px] border-zinc-300 text-white font-bold px-3 py-2 inline-block min-w-min'>{item}</button>
              })}
            </div>
            <div className=' absolute flex overflow-hidden right-full translate-x-1/2 top-1/2 -translate-y-1/2 text-[#cdea68] w-max h-max text-7xl leading-none tracking-tighter z-10'>{"VISE".split("").map((item, index) => 
             <motion.span
             initial={{ y: "100%" }}
             animate={cards[3]}
             transition={{ ease: [0.33, 1, 0.68, 1], delay: index * .03 }}
             className='inline-block'>{item}</motion.span>)}</div>

          </motion.div>
        </div>








      </div>
    </div>
  )
}

export default Featuredprojects;

