import React from 'react'

const About = () => {
  return (
    <>
    <section className='about py-8 my-8 w-full'>
        <div className="w-full py-10 pl-14">
        <h1 className="text-4xl font-roboto capitalize text-black font-light">About Us</h1>
        </div>
    </section>

    <section className=" w-full my-10">
        <div className="w-full px-6 lg:px-24 grid-cols-2 gap-6">
        {/* left */}
        <div className="w-full">
            <img src="" alt="worker" className="w-full h-full" />
        </div>

        </div>
    </section>
    </>
  )
}

export default About