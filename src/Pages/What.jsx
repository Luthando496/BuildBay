import React,{useState} from 'react'
import {BsFillCheckSquareFill} from 'react-icons/bs'






const What = () => {
    const [tab,setTab] = useState(0)


  return (
    <>
        <section className='about py-8 mt-4 mb-8 w-full'>
        <div className="w-full py-10 pl-14">
        <h1 className="text-4xl font-castoro capitalize text-black font-light">What we do</h1>
        </div>
        </section>



        <section className="w-full my-14">
            <div className="w-full px-14 grid grid-cols-4 gap-8">
                {/* left */}
            <div className="col-span-1 w-full gap-3">
            <ul className="hidden lg:block col-span-1 flex-col border-r">
                <li onClick={() => setTab(0)} className={`${tab === 0 ? 'border-l-8 border-l-yellow-500 ' :'border-0' } py-4 cursor-pointer border-b hover:text-yellow-400 text-black/70 duration-300`}>
                    <p className="text-xl uppercase text-right pr-6">All Services</p>
                </li>
                <li onClick={() => setTab(1)} className={`${tab === 1 ? 'border-l-8 border-l-yellow-500 ' :'border-0' } py-4 cursor-pointer border-b hover:text-yellow-400 text-black/70 duration-300`}>
                    <p className="text-xl uppercase text-right pr-6">construction</p>
                </li>
                <li onClick={() => setTab(2)} className={`${tab === 2 ? 'border-l-8 border-l-yellow-500 ' :'border-0' } py-4 cursor-pointer border-b hover:text-yellow-400 text-black/70 duration-300`}>
                    <p className="text-xl uppercase text-right pr-6">Renovations</p>
                </li>
                <li onClick={() => setTab(3)} className={`${tab === 3 ? 'border-l-8 border-l-yellow-500 ' :'border-0' } py-4 cursor-pointer border-b hover:text-yellow-400 text-black/70 duration-300`}>
                    <p className="text-xl uppercase text-right pr-6">big projects</p>
                </li>
                <li onClick={() => setTab(4)} className={`${tab === 4 ? 'border-l-8 border-l-yellow-500 ' :'border-0' } py-4 cursor-pointer border-b hover:text-yellow-400 text-black/70 duration-300`}>
                    <p className="text-xl uppercase text-right pr-6">Consulting</p>
                </li>
                <li onClick={() => setTab(5)} className={`${tab === 5 ? 'border-l-8 border-l-yellow-500 ' :'border-0' } py-4 cursor-pointer border-b hover:text-yellow-400 text-black/70 duration-300`}>
                    <p className="text-xl uppercase text-right pr-6">Architecture</p>
                </li>
                <li onClick={() => setTab(6)} className={`${tab === 6 ? 'border-l-8 border-l-yellow-500 ' :'border-0' } py-4 cursor-pointer border-b hover:text-yellow-400 text-black/70 duration-300`}>
                    <p className="text-xl uppercase text-right pr-6">CONCRETE TRANSPORT</p>
                </li>
            </ul>


            </div>
            {/*  */}
            {/* right */}
            <div className="col-span-3 w-full">
                {/* tab 0 */}
            <div className={`${tab === 0 ? 'block' :'hidden' } col-span-2 px-6`}>
            <div className="flex gap-8">
            {/* card */}
            <div className="w-full space-y-4">
            <div className="img w-full h-[300px]">
                <img src="https://images.unsplash.com/photo-1616137466211-f939a420be84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80" alt="house" className="w-full h-full" />
            </div>
            <div className="content space-y-10">
            <h1 className="text-black uppercase text-xl mb-8 font-playfair">THE INITIAL PLANNING</h1>
            <p className="text-black/70 ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo possimus et atque reiciendis non ipsum similique doloribus deserunt! Qui doloribus excepturi deserunt nihil totam ab reprehenderit explicabo.
            </p>
            <p className="text-black/70 ">
            Quisque semper iaculis velit, vel tristique quam interdum et. In molestie id nulla ac fringilla. Vestibulum pretium lectus augue, sit amet interdum lorem ultrices at. Morbi quis pellentesque nibh, commodo consequat odio. Morbi mollis fringilla felis quis ornare.
            </p>

            </div>


            </div>
            {/*  */}
            <div className="w-full space-y-4">
            <div className="img w-full h-[300px]">
                <img src="https://images.unsplash.com/photo-1616048056617-93b94a339009?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="house" className="w-full h-full" />
            </div>
            <div className="content space-y-10">
            <h1 className="text-black uppercase text-xl mb-8 font-playfair">FROM START TO FINISH</h1>
            <p className="text-black/70 ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo possimus et atque reiciendis non ipsum similique doloribus deserunt! Qui doloribus excepturi deserunt nihil totam ab reprehenderit explicabo.
            </p>
            <p className="text-black/70 ">
            Quisque semper iaculis velit, vel tristique quam interdum et. In molestie id nulla ac fringilla. Vestibulum pretium lectus augue, sit amet interdum lorem ultrices at. Morbi quis pellentesque nibh, commodo consequat odio. Morbi mollis fringilla felis quis ornare.
            </p>

            </div>


            </div>
            {/*  */}
            </div>
            </div>
            {/* //  */}
            {/* tab 1 */}
            <div className={`${tab === 1 ? 'block' :'hidden' } col-span-2 px-6`}>
            <div className="flex gap-8">
            {/* card */}
            <div className="w-full space-y-4">
            <div className="img w-full h-[300px]">
                <img src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="house" className="w-full h-full" />
            </div>
            <div className="content space-y-10">
            <h1 className="text-black uppercase text-xl mb-8 font-playfair">THE INITIAL PLANNING</h1>
            <p className="text-black/70 ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo possimus et atque reiciendis non ipsum similique doloribus deserunt! Qui doloribus excepturi deserunt nihil totam ab reprehenderit explicabo.
            </p>
            <p className="text-black/70 ">
            Quisque semper iaculis velit, vel tristique quam interdum et. In molestie id nulla ac fringilla. Vestibulum pretium lectus augue, sit amet interdum lorem ultrices at. Morbi quis pellentesque nibh, commodo consequat odio. Morbi mollis fringilla felis quis ornare.
            </p>

            </div>


            </div>
            {/*  */}
            <div className="w-full space-y-4">
            <div className="img w-full h-[300px]">
                <img src="https://plus.unsplash.com/premium_photo-1671734044410-e637aa7f2b1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="house" className="w-full h-full" />
            </div>
            <div className="content space-y-10">
            <h1 className="text-black uppercase text-xl mb-8 font-playfair">FROM START TO FINISH</h1>
            <p className="text-black/70 ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo possimus et atque reiciendis non ipsum similique doloribus deserunt! Qui doloribus excepturi deserunt nihil totam ab reprehenderit explicabo.
            </p>
            <p className="text-black/70 ">
            Quisque semper iaculis velit, vel tristique quam interdum et. In molestie id nulla ac fringilla. Vestibulum pretium lectus augue, sit amet interdum lorem ultrices at. Morbi quis pellentesque nibh, commodo consequat odio. Morbi mollis fringilla felis quis ornare.
            </p>

            </div>


            </div>
            {/*  */}
            </div>
            </div>
            {/* //  */}
            {/* //  */}
            {/* tab 0 */}
            <div className={`${tab === 2 ? 'block' :'hidden' } col-span-2 px-6 grid grid-cols-1 gap-6 lg:grid-cols-3`}>
                {/* card */}
                <div className="card space-y-6 w-full">
                    <div className="img w-full h-[200px]">
                        <img src="https://images.pexels.com/photos/3862371/pexels-photo-3862371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="worker" className="w-full h-full" />
                    </div>
                    <h2 className="text-black text-xl uppercase font-castoro">Construction</h2>
                    <p className="text-gray-400 text-[14px]">We offer varioty of construction types. From small jobs to big projects. Renovations, house construction, road construction, corporate and industrial work.</p>
                    <button className="border-sky-600 border uppercase px-4 py-2 hover:bg-slate-500 duration-300 rounded-md text-md font-roboto">Read More</button>
                </div>
                {/*  */}
                {/* card */}
                <div className="card space-y-6 w-full">
                    <div className="img w-full h-[200px]">
                        <img src="https://images.pexels.com/photos/2098624/pexels-photo-2098624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="worker" className="w-full h-full" />
                    </div>
                    <h2 className="text-black text-xl uppercase font-castoro">RENOVATIONS</h2>
                    <p className="text-gray-400 text-[14px]">We renovate your current situations. We do everything, from tiling, painting, woodwork stone work, planning, architecture and we consult you all the way.</p>
                    <button className="border-sky-600 border uppercase px-4 py-2 hover:bg-slate-500 duration-300 rounded-md text-md font-roboto">Read More</button>
                </div>
                {/*  */}
                {/* card */}
                <div className="card space-y-6 w-full">
                    <div className="img w-full h-[200px]">
                        <img src="https://images.pexels.com/photos/1654330/pexels-photo-1654330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="worker" className="w-full h-full" />
                    </div>
                    <h2 className="text-black text-xl uppercase font-castoro">BIG PROJECTS</h2>
                    <p className="text-gray-400 text-[14px]">We have the capacities to take on really big projects. With complete vehicle park and our own concrete production we can meet your needs with ease.</p>
                    <button className="border-sky-600 border uppercase px-4 py-2 hover:bg-slate-500 duration-300 rounded-md text-md font-roboto">Read More</button>
                </div>
                {/*  */}
                {/* card */}
                <div className="card space-y-6 w-full">
                    <div className="img w-full h-[200px]">
                        <img src="https://images.pexels.com/photos/3862365/pexels-photo-3862365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="worker" className="w-full object-cover h-full" />
                    </div>
                    <h2 className="text-black text-xl uppercase font-castoro">CONSULTING</h2>
                    <p className="text-gray-400 text-[14px]">Not sure how to start? No worries, we can take for your documentation, consulting and project plans,  from start to finalization. Let us succeed together for your goals.</p>
                    <button className="border-sky-600 border uppercase px-4 py-2 hover:bg-slate-500 duration-300 rounded-md text-md font-roboto">Read More</button>
                </div>
                {/*  */}
                {/* card */}
                <div className="card space-y-6 w-full">
                    <div className="img w-full h-[200px]">
                        <img src="https://images.pexels.com/photos/2590716/pexels-photo-2590716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="worker" className="w-full h-full" />
                    </div>
                    <h2 className="text-black text-xl uppercase font-castoro">ARCHITECTURE</h2>
                    <p className="text-gray-400 text-[14px]">We take pride in our work. Designing big projects is our focus for 2015. Together we bring life to your ideas and wishes. Go on and check some of our best work and join our family.</p>
                    <button className="border-sky-600 border uppercase px-4 py-2 hover:bg-slate-500 duration-300 rounded-md text-md font-roboto">Read More</button>
                </div>
                {/*  */}
                {/* card */}
                <div className="card space-y-6 w-full">
                    <div className="img w-full h-[200px]">
                        <img src="https://images.pexels.com/photos/323645/pexels-photo-323645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="worker" className="w-full h-full" />
                    </div>
                    <h2 className="text-black text-xl uppercase font-castoro">CONCRETE TRANSPORT</h2>
                    <p className="text-gray-400 text-[14px]">We realize the importance of a complete solution, that is why we offer all kind of transport, send, building material and concrete which is produced in house with top quality.</p>
                    <button className="border-sky-600 border uppercase px-4 py-2 hover:bg-slate-500 duration-300 rounded-md text-md font-roboto">Read More</button>
                </div>
                {/*  */}

            </div>
            {/* tab 3 */}
            <div className={`${tab === 3 ? 'block' :'hidden' } col-span-2 px-6`}>
            <div className="flex gap-8">
            {/* card */}
            <div className="w-full space-y-4">
            <div className="img w-full h-[300px]">
                <img src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="house" className="w-full h-full" />
            </div>
            <div className="content space-y-10">
            <h1 className="text-black uppercase text-xl mb-8 font-playfair">THE INITIAL PLANNING</h1>
            <p className="text-black/70 ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo possimus et atque reiciendis non ipsum similique doloribus deserunt! Qui doloribus excepturi deserunt nihil totam ab reprehenderit explicabo.
            </p>
            <p className="text-black/70 ">
            Quisque semper iaculis velit, vel tristique quam interdum et. In molestie id nulla ac fringilla. Vestibulum pretium lectus augue, sit amet interdum lorem ultrices at. Morbi quis pellentesque nibh, commodo consequat odio. Morbi mollis fringilla felis quis ornare.
            </p>

            </div>


            </div>
            {/*  */}
            <div className="w-full space-y-4">
            <div className="img w-full h-[300px]">
                <img src="https://plus.unsplash.com/premium_photo-1671734044410-e637aa7f2b1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="house" className="w-full h-full" />
            </div>
            <div className="content space-y-10">
            <h1 className="text-black uppercase text-xl mb-8 font-playfair">FROM START TO FINISH</h1>
            <p className="text-black/70 ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo possimus et atque reiciendis non ipsum similique doloribus deserunt! Qui doloribus excepturi deserunt nihil totam ab reprehenderit explicabo.
            </p>
            <p className="text-black/70 ">
            Quisque semper iaculis velit, vel tristique quam interdum et. In molestie id nulla ac fringilla. Vestibulum pretium lectus augue, sit amet interdum lorem ultrices at. Morbi quis pellentesque nibh, commodo consequat odio. Morbi mollis fringilla felis quis ornare.
            </p>

            </div>


            </div>
            {/*  */}
            </div>
            </div>
            {/* //  */}
            {/* tab 0 */}
            <div className={`${tab === 4 ? 'block' :'hidden' } col-span-2 px-6 grid grid-cols-1 gap-6 lg:grid-cols-3`}>
                {/* card */}
                <div className="card space-y-6 w-full">
                    <div className="img w-full h-[200px]">
                        <img src="https://images.pexels.com/photos/3862371/pexels-photo-3862371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="worker" className="w-full h-full" />
                    </div>
                    <h2 className="text-black text-xl uppercase font-castoro">Construction</h2>
                    <p className="text-gray-400 text-[14px]">We offer varioty of construction types. From small jobs to big projects. Renovations, house construction, road construction, corporate and industrial work.</p>
                    <button className="border-sky-600 border uppercase px-4 py-2 hover:bg-slate-500 duration-300 rounded-md text-md font-roboto">Read More</button>
                </div>
                {/*  */}
                {/* card */}
                <div className="card space-y-6 w-full">
                    <div className="img w-full h-[200px]">
                        <img src="https://images.pexels.com/photos/2098624/pexels-photo-2098624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="worker" className="w-full h-full" />
                    </div>
                    <h2 className="text-black text-xl uppercase font-castoro">RENOVATIONS</h2>
                    <p className="text-gray-400 text-[14px]">We renovate your current situations. We do everything, from tiling, painting, woodwork stone work, planning, architecture and we consult you all the way.</p>
                    <button className="border-sky-600 border uppercase px-4 py-2 hover:bg-slate-500 duration-300 rounded-md text-md font-roboto">Read More</button>
                </div>
                {/*  */}
                {/* card */}
                <div className="card space-y-6 w-full">
                    <div className="img w-full h-[200px]">
                        <img src="https://images.pexels.com/photos/1654330/pexels-photo-1654330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="worker" className="w-full h-full" />
                    </div>
                    <h2 className="text-black text-xl uppercase font-castoro">BIG PROJECTS</h2>
                    <p className="text-gray-400 text-[14px]">We have the capacities to take on really big projects. With complete vehicle park and our own concrete production we can meet your needs with ease.</p>
                    <button className="border-sky-600 border uppercase px-4 py-2 hover:bg-slate-500 duration-300 rounded-md text-md font-roboto">Read More</button>
                </div>
                {/*  */}
                {/* card */}
                <div className="card space-y-6 w-full">
                    <div className="img w-full h-[200px]">
                        <img src="https://images.pexels.com/photos/3862365/pexels-photo-3862365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="worker" className="w-full object-cover h-full" />
                    </div>
                    <h2 className="text-black text-xl uppercase font-castoro">CONSULTING</h2>
                    <p className="text-gray-400 text-[14px]">Not sure how to start? No worries, we can take for your documentation, consulting and project plans,  from start to finalization. Let us succeed together for your goals.</p>
                    <button className="border-sky-600 border uppercase px-4 py-2 hover:bg-slate-500 duration-300 rounded-md text-md font-roboto">Read More</button>
                </div>
                {/*  */}
                {/* card */}
                <div className="card space-y-6 w-full">
                    <div className="img w-full h-[200px]">
                        <img src="https://images.pexels.com/photos/2590716/pexels-photo-2590716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="worker" className="w-full h-full" />
                    </div>
                    <h2 className="text-black text-xl uppercase font-castoro">ARCHITECTURE</h2>
                    <p className="text-gray-400 text-[14px]">We take pride in our work. Designing big projects is our focus for 2015. Together we bring life to your ideas and wishes. Go on and check some of our best work and join our family.</p>
                    <button className="border-sky-600 border uppercase px-4 py-2 hover:bg-slate-500 duration-300 rounded-md text-md font-roboto">Read More</button>
                </div>
                {/*  */}
                {/* card */}
                <div className="card space-y-6 w-full">
                    <div className="img w-full h-[200px]">
                        <img src="https://images.pexels.com/photos/323645/pexels-photo-323645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="worker" className="w-full h-full" />
                    </div>
                    <h2 className="text-black text-xl uppercase font-castoro">CONCRETE TRANSPORT</h2>
                    <p className="text-gray-400 text-[14px]">We realize the importance of a complete solution, that is why we offer all kind of transport, send, building material and concrete which is produced in house with top quality.</p>
                    <button className="border-sky-600 border uppercase px-4 py-2 hover:bg-slate-500 duration-300 rounded-md text-md font-roboto">Read More</button>
                </div>
                {/*  */}

            </div>
            {/* //  */}
              {/* tab 0 */}
              <div className={`${tab === 5 ? 'block' :'hidden' } col-span-2 px-6`}>
            <div className="flex gap-8">
            {/* card */}
            <div className="w-full space-y-4">
            <div className="img w-full h-[300px]">
                <img src="https://images.unsplash.com/photo-1616137466211-f939a420be84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80" alt="house" className="w-full h-full" />
            </div>
            <div className="content space-y-10">
            <h1 className="text-black uppercase text-xl mb-8 font-playfair">THE INITIAL PLANNING</h1>
            <p className="text-black/70 ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo possimus et atque reiciendis non ipsum similique doloribus deserunt! Qui doloribus excepturi deserunt nihil totam ab reprehenderit explicabo.
            </p>
            <p className="text-black/70 ">
            Quisque semper iaculis velit, vel tristique quam interdum et. In molestie id nulla ac fringilla. Vestibulum pretium lectus augue, sit amet interdum lorem ultrices at. Morbi quis pellentesque nibh, commodo consequat odio. Morbi mollis fringilla felis quis ornare.
            </p>

            </div>


            </div>
            {/*  */}
            <div className="w-full space-y-4">
            <div className="img w-full h-[300px]">
                <img src="https://images.unsplash.com/photo-1616048056617-93b94a339009?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="house" className="w-full h-full" />
            </div>
            <div className="content space-y-10">
            <h1 className="text-black uppercase text-xl mb-8 font-playfair">FROM START TO FINISH</h1>
            <p className="text-black/70 ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo possimus et atque reiciendis non ipsum similique doloribus deserunt! Qui doloribus excepturi deserunt nihil totam ab reprehenderit explicabo.
            </p>
            <p className="text-black/70 ">
            Quisque semper iaculis velit, vel tristique quam interdum et. In molestie id nulla ac fringilla. Vestibulum pretium lectus augue, sit amet interdum lorem ultrices at. Morbi quis pellentesque nibh, commodo consequat odio. Morbi mollis fringilla felis quis ornare.
            </p>

            </div>


            </div>
            {/*  */}
            </div>
            </div>
            {/* //  */}
            {/* tab 1 */}
            <div className={`${tab === 6 ? 'block' :'hidden' } col-span-2 px-6`}>
            <div className="flex gap-8">
            {/* card */}
            <div className="w-full space-y-4">
            <div className="img w-full h-[300px]">
                <img src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="house" className="w-full h-full" />
            </div>
            <div className="content space-y-10">
            <h1 className="text-black uppercase text-xl mb-8 font-playfair">THE INITIAL PLANNING</h1>
            <p className="text-black/70 ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo possimus et atque reiciendis non ipsum similique doloribus deserunt! Qui doloribus excepturi deserunt nihil totam ab reprehenderit explicabo.
            </p>
            <p className="text-black/70 ">
            Quisque semper iaculis velit, vel tristique quam interdum et. In molestie id nulla ac fringilla. Vestibulum pretium lectus augue, sit amet interdum lorem ultrices at. Morbi quis pellentesque nibh, commodo consequat odio. Morbi mollis fringilla felis quis ornare.
            </p>

            </div>


            </div>
            {/*  */}
            <div className="w-full space-y-4">
            <div className="img w-full h-[300px]">
                <img src="https://plus.unsplash.com/premium_photo-1671734044410-e637aa7f2b1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="house" className="w-full h-full" />
            </div>
            <div className="content space-y-10">
            <h1 className="text-black uppercase text-xl mb-8 font-playfair">FROM START TO FINISH</h1>
            <p className="text-black/70 ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo possimus et atque reiciendis non ipsum similique doloribus deserunt! Qui doloribus excepturi deserunt nihil totam ab reprehenderit explicabo.
            </p>
            <p className="text-black/70 ">
            Quisque semper iaculis velit, vel tristique quam interdum et. In molestie id nulla ac fringilla. Vestibulum pretium lectus augue, sit amet interdum lorem ultrices at. Morbi quis pellentesque nibh, commodo consequat odio. Morbi mollis fringilla felis quis ornare.
            </p>

            </div>


            </div>
            {/*  */}
            </div>
            </div>
            {/* //  */}
            </div>
            {/*  */}
            </div>
        </section>
    </>
  )
}

export default What