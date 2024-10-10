import React, { useState, useEffect } from 'react'


function Eyes() {
    const [rotate, setRotate] = useState(0);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;

            const eyeCenterX = window.innerWidth / 2;
            const eyeCenterY = window.innerHeight / 2;

            const deltaX = mouseX - eyeCenterX;
            const deltaY = mouseY - eyeCenterY;

            const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            setRotate(angle - 180); // Adjust -90 to align with eye position if needed
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);


    return (
        <div className='w-full h-screnn overflow-hidden'>
            <div data-scroll data-scroll-section data-scroll-speed="-.8" className='bg-white z-10  flex justify-center items-center relative overflow-hidden'>
                <img className="z-1 bg-contain" src="public/Top-Viewbbcbv-1-1440x921.jpg" alt="Background"></img>
                <div className='absolute w-1/2 h-56 top-[15rem] right-[23.5rem] flex justify-center items-center gap-12 mt-10 '>
                    <div className="eye1 bg-white rounded-full w-[14rem] h-[14rem] flex justify-center items-center">
                        <div className="innereye1 relative w-32 h-32 rounded-full bg-black">
                            <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className='absolute top-1/2 left-1/2 w-full h-5'>
                                <div className='rounded-full w-4 h-4 bg-white'></div>
                            </div>
                        </div>
                    </div>
                    <div className="eye2 bg-white rounded-full w-[14rem] h-[14rem] flex justify-center items-center">
                        <div className="innereye2 relative w-32 h-32 rounded-full bg-black">
                            <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className='absolute top-1/2 left-1/2 w-full h-5'>
                                <div className='rounded-full w-4 h-4 bg-white'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Eyes;