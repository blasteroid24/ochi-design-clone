import React, {userstate , useEffect} from 'react'


function Readyeye(){

    return (
        
        <div className='w-full h-screen bg-[#cdea68] flex justify-center items-center'>
            <div className=' learding-none tracking-tighter'>
                <div className='text-black font-bold text-9xl '>
                    <div className='flex justify-center items-center'>READY</div>
                    <div className='flex justify-center items-center'>TO START</div>
                    <div className='flex justify-center items-center'>THE PROJECT?</div>
                </div>
                <div className='  flex-co w-full pt-5'>
                    <div className='flex justify-center items-center'><button className=' l p-3 rounded-3xl border-2 border-black bg-black'>START THE PROJECT</button></div>
                    <h1 className='text-black text-1xl py-2 flex justify-center items-center'>OR</h1>
                    <div className='flex justify-center items-center'><button className='p-3 rounded-3xl border-2 border-black bg-transparent text-black '>HELLO@OCHI DESIGN</button></div>
                </div>
            </div>
        </div>
    )
}

export default Readyeye