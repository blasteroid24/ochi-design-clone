import React from 'react'

function About() {
  return (
    <div   className='w-full p-20 bg-[#cdea68] rounded-tl-3xl rounded-tr-3xl text-wrap  text-black'>
      <div className="text text-[7.5vh]  pr-80 leading-none font-light ">Ochi is a strategic presentation agency for forward-thinking businesses that need to <u className='decoration-2'>raise funds, sell products, explain complex ideas</u>, and <u className='decoration-2'> hire great people</u>.</div>

      <div className='w-full border-t-[1px] border-zinc-600 mt-20 py-5 flex text-[16px] '>
        <div className='min-w-[45rem]'>What you can expect:</div>
        <div className='w-[18rem]'>
          We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether its live or digital, delivered for one or a hundred people.
          <div className='py-10'>We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating</div>
        </div>
        <div className='pl-44 pt-20'>
          S:
          <div className='pt-5'><ul className='decoration-none '>
            <li><a className='underline underline-offset-1 cursor-pointer ' hred="#">Instagram</a></li>
            <li><a className='underline underline-offset-4 cursor-pointer' hred="#">Behance</a></li>
            <li><a className='underline underline-offset-4 cursor-pointer' hred="#">Facebook</a></li>
            <li><a className='underline underline-offset-4 cursor-pointer' hred="#">Linkedin</a></li>
          </ul></div>
        </div>
      </div>
      <div className='w-full border-t-[1px] border-zinc-600 mt-20 py-5 flex '>
        <div className='w-1/2'>
          <div className="box text-6xl">
            Our approach:
          </div>
          <button className='p-8 w-[12vw] h-[4vw] bg-black text-white rounded-full mt-5 flex justify-between items-center text-[16px] '>READ MORE
            <div className='absolute left-52 flex justify-center items-center w-10 h-10 border-2 border-zinc-500 rounded-full bg-white scale-[0.2] hover:animate-arrowmagic'><span className=" material-symbols-outlined text-xl bg-white text-black  rounded-full z-0 ">north_east</span></div>
          </button>
        </div>
        <div>
          <img className='rounded-3xl' src="public/Homepage-Photo-663x469.jpg"></img>
        </div>

      </div>
    </div>
  )
}

export default About