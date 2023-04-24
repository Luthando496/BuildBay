import React from 'react'

const BottomHero = () => {
  return (
    <>
    <section className='w-full pt-10 pb-40  px-12 lg:px-20 bottomHero mt-14'>
    <div className="flex flex-col lg:flex-row space-y-3 justify-between items-center">
    <h1 className="text-md  md:text-2xl text-white font-roboto uppercase">FAST AND RELIABLE SERVICE FOR YOUR PROJECT OR A QUICK FIX, WE DO IT ALL!</h1>

    <button className="text-md  text-white md:text-xl px-4 md:px-6 py-2 md:py-4 bg-yellow-500 hover:bg-yellow-950 duration-500 rounded-xl font-castoro">Get A Quote</button>

    </div>
    

    </section>


    <section className="w-full  py-4 -mt-32">
        <div className="w-[85%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* card */}
        <div className="w-full">
            <div className="img h-[15rem] w-full ">
            <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvbnN0cnVjdGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="man-working" className="w-full h-full" />

            </div>

            <h1 className="my-6 uppercase text-md font-semibold text-black/60 font-roboto">PLANNING YOUR PROJECT FROM SCRATCH</h1>

            <div className="w-full bg-gray-500 h-[1px]"></div>

            <h1 className="text-md text-black/60 my-4 uppercase">FREE CONSULTATION FOR YOUR PROJECT</h1>
            <p className="text-md text-black/60 font-robot">Constructo Construction Inc provides building services to clients who value diligence, resourcefulness and creativity in a partner.</p>

        </div>
        {/*  */}
         {/* card */}
         <div className="w-full">
            <div className="img h-[15rem] w-full ">
            <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="man-working" className="w-full h-full" />

            </div>

            <h1 className="my-6 uppercase text-md font-semibold text-black/60 font-roboto">TOP CONCRETE DISTRIBUTION</h1>

            <div className="w-[70%] bg-gray-500 h-[1px]"></div>

            <h1 className="text-md text-black/60 my-4 uppercase">TOP QUALITY CONCRETE DELIVERED</h1>
            <p className="text-md text-black/60 font-robot">In Constructo we are committed to green building, roads, bridges and sustainability in our offices as well as on our job sites.</p>

        </div>
        {/*  */}
         {/* card */}
         <div className="w-full">
            <div className="img h-[15rem] w-full ">
            <img src="https://images.unsplash.com/photo-1516216628859-9bccecab13ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80" alt="man-working" className="w-full h-full" />

            </div>

            <h1 className="my-6 uppercase text-md font-semibold text-black/60 font-roboto">GET YOUR FREE CONSULTATION</h1>

            <div className="w-full bg-gray-500 h-[1px]"></div>

            <h1 className="text-md text-black/60 my-4 uppercase">ADAPTING TO ANY PROJECT</h1>
            <p className="text-md text-black/60 font-robot">Our capacities give us the freedom of executing project of various sizes. From small personal projects to building mega build of grand scale.</p>

        </div>
        {/*  */}


        </div>

    </section>


    </>

  )
}

export default BottomHero;