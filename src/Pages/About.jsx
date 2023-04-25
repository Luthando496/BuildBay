import React from 'react'

const About = () => {
  return (
    <>
    <section className='about py-8 my-8 w-full'>
        <div className="w-full py-10 pl-14">
        <h1 className="text-4xl font-roboto capitalize text-black font-light">About Us</h1>
        </div>
    </section>

    <section className=" w-full my-24">
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

    <section className="my-24 w-full">
        <div className="w-full px-10 lg:px-24 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {/* card */}
        <div className="card overflow-hidden  w-full">
        <div className="img relative h-[15rem] overflow-hidden group">
        <img src="https://images.unsplash.com/photo-1581455527083-9d62f3f5ae01?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Zm9ybWFsJTIwbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="man-office" className="w-full h-full group-hover:h-[45%] duration-300 object-cover" />
        <div className="absolute -bottom-[100%] group-hover:bottom-0 flex justify-center items-center  duration-700 left-0 w-full h-[55%] bg-gray-100/25 px-6">
        <p className="text-sm text-black leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mattis aliquet purus non elementum. Nam quis vulputate enim, congue ullamcorper risus
        </p>
        </div>
        </div>
        <div className="space-y-6 text-center mt-4 border-b">
            <h1 className="text-2xl text-black/80 font-roboto">Steve Gary</h1>
            <p className="text-md text-black/40 font-roboto">CEO</p>
        </div>
        </div>
        {/*  */}
        {/* card */}
        <div className="card overflow-hidden  w-full">
        <div className="img relative h-[15rem] overflow-hidden group">
        <img src="https://images.unsplash.com/photo-1560250056-07ba64664864?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=851&q=80" alt="man-office" className="w-full h-full group-hover:h-[45%] duration-300 object-cover" />
        <div className="absolute -bottom-[100%] group-hover:bottom-0 flex justify-center items-center  duration-700 left-0 w-full h-[55%] bg-gray-100/25 px-6">
        <p className="text-sm text-black leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mattis aliquet purus non elementum. Nam quis vulputate enim, congue ullamcorper risus
        </p>
        </div>
        </div>
        <div className="space-y-6 text-center mt-4 border-b">
            <h1 className="text-2xl text-black/80 font-roboto">Joseph Smith</h1>
            <p className="text-md text-black/40 font-roboto">Sales</p>
        </div>
        </div>
        {/*  */}
        {/* card */}
        <div className="card overflow-hidden  w-full">
        <div className="img relative h-[15rem] overflow-hidden group">
        <img src="https://images.unsplash.com/photo-1557425631-f132f06f4aa1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="man-office" className="w-full h-full group-hover:h-[45%] duration-300 object-cover" />
        <div className="absolute -bottom-[100%] group-hover:bottom-0 flex justify-center items-center  duration-700 left-0 w-full h-[55%] bg-gray-100/25 px-6">
        <p className="text-sm text-black leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mattis aliquet purus non elementum. Nam quis vulputate enim, congue ullamcorper risus
        </p>
        </div>
        </div>
        <div className="space-y-6 text-center mt-4 border-b">
            <h1 className="text-2xl text-black/80 font-roboto">Joseph Pitt</h1>
            <p className="text-md text-black/40 font-roboto">Project Manager</p>
        </div>
        </div>
        {/*  */}
        {/* card */}
        <div className="card overflow-hidden  w-full">
        <div className="img relative overflow-hidden h-[15rem] group">
        <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzV8fGNvbnN0cnVjdGlvbiUyMHdvcmtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="man-office" className="w-full h-full group-hover:h-[45%] duration-300 object-cover" />
        <div className="absolute -bottom-[100%] group-hover:bottom-0 flex justify-center items-center  duration-700 left-0 w-full h-[55%] bg-gray-100/25 px-6">
        <p className="text-sm text-black leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mattis aliquet purus non elementum. Nam quis vulputate enim, congue ullamcorper risus
        </p>
        </div>
        </div>
        <div className="space-y-6 text-center mt-4 border-b">
            <h1 className="text-2xl text-black/80 font-roboto">Gary Graham</h1>
            <p className="text-md text-black/40 font-roboto">Quality Manager</p>
        </div>
        </div>
        {/*  */}

        </div>
    </section>
    </>
  )
}

export default About