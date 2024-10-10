import React from 'react'

function Reviews() {
    return (
        <div className='w-full pb=10 relative'>
            <h1 className='text-6xl pt-10 px-20 border-b-[1px] border-zinc-700  pb-16 pl-10'>Clients' reviews</h1>
            <div className='pt-5 pl-5 pr-5'><ul className='decoration-none flex justify-between'>
                <li className='cursor-pointer'><a href="#">Karman Ventures</a></li>
                <li>Services:</li>
                <li>William Barnes</li>
                <li className='cursor-pointer ml-64 text-zinc-500'><a href="#">Read</a></li>
            </ul>
            </div>

                           
                <div className='relative left-[27rem] pt-14 pb-10'>
                    <div className='pb-5'><button className='p-2 border-2 border-zinc-600 rounded-3xl'>INVESTOR DECK</button></div>
                    <div><button className='p-2 border-2 border-zinc-600 rounded-3xl'>SALES DECK</button></div>
                </div> 
            
                 <div className='relative w-1/4 -top-52 left-[50rem] pt-10'>
                    <img className='h-28 w-28' src="https://ochi.design/wp-content/uploads/2023/02/William-Barnes-1-300x300.png" />
                    <p className='pt-10'>
                        They were transparent about the time and the stages of the project. The end product is high quality, and I feel confident about how they were handholding the client through the process. I feel like I can introduce them to someone who needs to put a sales deck together from scratch, and they would be able to handhold the client experience from 0 to 100 very effectively from story to design. 5/5
                    </p>
                </div>
            


            <div className="relative w-full px-10 card  ">
                {[
                    ['Planetly', 'Nina WAlloch', 'READ'],
                    ['CompanyX', 'John Doe', 'READ'],
                    ['TechCo', 'Jane Smith', 'READ'],
                    ['Hypercare Systems', 'Brendan Goss', 'READ'],
                    ['Officevibe', 'Raff Labrie', 'READ'],
                    ['Orderlion', 'Stefan Strohmer', 'READ'],
                ].map((item, index) => (
                     <div key={index} className='flex justify-between border-t border-b py-3 border-zinc-600'>
                       <div className='w-36'><a>{item[0]}</a></div>
                       <div className='w-36'><a>{item[1]}</a></div>
                       <div><a>{item[2]}</a></div>
                    </div>
                ))}


            </div>

        </div>
    )
}

export default Reviews