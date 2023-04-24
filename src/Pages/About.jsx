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
        <div className="w-full px-6 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* left */}
        <div className="w-full h-[26rem] lg:h-full">
            <img src="https://images.unsplash.com/photo-1632862378103-8248dccb7e3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80" alt="worker" className="w-full object-cover h-full" />
        </div>

        {/* right */}
        <div className="w-full grid grid-cols-2 gap-8">
        {/* card */}
        <div className="space-y-4 w-full">
            <div className="img w-full h-[10rem]">
                <img src="https://images.unsplash.com/photo-1587582423116-ec07293f0395?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="working-man" className="w-full h-full" />
            </div>
            <h2 className="text-black  uppercase font-roboto font-light text-2xl">COMPANY HISTORY</h2>
            <p className="text-gray-400 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ornare odio et massa dignissim, at accumsan metus viverra. Integer neque lectus, pellentesque sitesit au dolor</p>
        </div>
        {/* //  */}
        {/* card */}
        <div className="space-y-4 w-full">
            <div className="img w-full h-[10rem]">
                <img src="https://images.unsplash.com/photo-1567954970774-58d6aa6c50dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="working-man" className="w-full h-full" />
            </div>
            <h2 className="text-black font-roboto font-light text-2xl uppercase">OUR MISSION</h2>
            <p className="text-gray-400 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ornare odio et massa dignissim, at accumsan metus viverra. Integer neque lectus, pellentesque sitesit au dolor</p>
        </div>
        {/* //  */}
        {/* card */}
        <div className="space-y-4 w-full">
            <div className="img w-full h-[10rem]">
                <img src="https://images.unsplash.com/photo-1597476817120-9b82cef5ce82?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGNvbnN0cnVjdGlvbiUyMHdvcmtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="working-man" className="w-full h-full" />
            </div>
            <h2 className="text-black font-roboto font-light text-2xl uppercase">COMPANY VISION</h2>
            <p className="text-gray-400 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ornare odio et massa dignissim, at accumsan metus viverra. Integer neque lectus, pellentesque sitesit au dolor</p>
        </div>
        {/* //  */}
        {/* card */}
        <div className="space-y-4 w-full">
            <div className="img w-full h-[10rem]">
                <img src="https://images.unsplash.com/photo-1512187849-463fdb898f21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZXJuJTIwYnJpZGdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="working-man" className="w-full h-full" />
            </div>
            <h2 className="text-black font-roboto font-light text-2xl uppercase">EXPANDING GOAL</h2>
            <p className="text-gray-400 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ornare odio et massa dignissim, at accumsan metus viverra. Integer neque lectus, pellentesque sitesit au dolor</p>
        </div>
        {/* //  */}

        </div>

        </div>
    </section>
    </>
  )
}

export default About