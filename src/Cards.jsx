import React from 'react'

function Cards() {
  return (
    <div className='mt-24 h-screen flex px-14 gap-5 relative'>
        <div className=' relative w-[50rem] h-[25rem] bg-[#004d43] rounded-3xl text-6xl flex justify-center items-center text-[#cdea68]'>ochi
            <div className=' absolute left-5 bottom-8 p-2 rounded-3xl text-[#cdea68] h-8 w-42  text-[17px] border-2 border-[#cdea68]'>2019-2022</div>
        </div>
        <div className='relative w-[25rem] h-[25rem] bg-[#212121] rounded-3xl text-6xl flex justify-center items-center'><img src="public/logo002.svg"></img>
        <button className=' absolute left-5 bottom-8 p-2 rounded-3xl text-white h-8 w-42  text-[17px] border-2 border-white'>RATING 5.0 ON CLUTCH</button>
        </div>
        <div className='relative w-[25rem] h-[25rem] bg-[#212121] rounded-3xl text-6xl flex justify-center items-center'><img className="scale-[60%]" src="public/logo003.png"></img>
        <button className=' absolute left-5 bottom-8 p-2 rounded-3xl text-white h-8 w-42  text-[17px] border-2 border-white'>BUSSINESS BOOTCAMP ALUMINI</button>
        </div>
    </div>
  )
}

export default Cards