import { motion } from 'framer-motion'
import React from 'react'

function Landing() {
  
  return (
    
    <div className=' w-full h-screen bg-zinc-900 pt-1'>
        <div className="textstructure mt-44 px-20">
         {["WE CREATE" ,"EYE OPENING", "PRESENTATIONS" ].map((item,index)=>{
            return <div className="masker ">  
              <div className='w-fit flex '>  
                   {index === 1 && (<motion.div 
                   initial={{width:0}}
                   animate={{width:'9vw'}}
                   transition={{ease:[0.45, 0, 0.55, 1],duration:'1'}}
                   className=' h-[7vw] mt bg-green-500-2 overflow-hidden mr-1 pt-4 rounded-3xl'><motion.img 
                   initial={{width:0}}
                   animate={{width:'9vw'}}
                   transition={{ease:[0.45, 0, 0.55, 1],duration:'1'}}
                   className='bg-contain' src="/ochies.png"></motion.img></motion.div>) }
                   <h1 className=' text-[5.5vw] font-bleach leading-[6vw] tracking-tighter font-semibold'>{item}</h1>
              </div>
            </div>
         })}
        </div>
        <div className='border-t-[1px] border-zinc-800 mt-24 flex gap-x-40 justify-between items-center'>
           {["For Public and Private Comapnies", "From the First Pitch to IPO"].map((item,index)=>{
            return <p className='text-md font-light tracking-tight leading-none px-20 py-5'>{item}</p>
           })}
           <div className='start flex items-center gap-2 px-12'>
             
                <div className='border-2 border-zinc-500 px-4 py-2  rounded-full text-[14px]'>START THE PROJECT</div>
                <div className='flex justify-center items-center w-8 h-8 border-2 border-zinc-500 rounded-full'><span className="material-symbols-outlined outlined text-xl ">north_east</span></div>
             
           </div> 
        </div>
        
    </div>
  )
}

export default Landing