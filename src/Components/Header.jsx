import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles





const Header = () => {
  return (
    <>
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      
    //   scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      className='relative'
    //   onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
      <header className='w-full min-h-[90vh] relative'>
        <div className="img absolute top-0 left-0 h-full w-full">
            <img src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="men-working" className="w-full h-full" />
        </div>
        <div className="overlay absolute top-0 left-0 h-full w-full bg-black/60"></div>
        <div className="wrapper absolute top-0 left-0 w-full h-full flex justify-center items-center">
            <div className="space-y-4 md:w-[50%] mx-auto text-center">
                <h1 className="text-yellow-500 text-xl capitalize font-thin">We Help You Construct Your Home</h1>
                <h1 className="text-xl md:text-2xl lg:text-5xl font-light font-castoro uppercase text-white">Renovate Your Home</h1>
                <h3 className="text-2xl uppercase font-semibold text-white">And join over 567 satisfied customers</h3>
                <div className="flex justify-center items-center">
                    <button className="px-6 py-4 font-roboto  bg-black rounded-xl hover:bg-gray-600/40 duration-300 text-white text-xl font-semibold">Welcome</button>
                </div>
            </div>
        </div>
    </header>
      </SwiperSlide>
      <SwiperSlide>
      <header className='w-full min-h-[90vh] relative'>
        <div className="img absolute top-0 left-0 h-full w-full">
            <img src="https://images.unsplash.com/photo-1536895058696-a69b1c7ba34f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" alt="men-working" className="w-full h-full" />
        </div>
        <div className="overlay absolute top-0 left-0 h-full w-full bg-black/60"></div>
        <div className="wrapper absolute top-0 left-0 w-full h-full flex justify-center items-center">
            <div className="space-y-4 md:w-[50%] mx-auto text-center">
                <h1 className="text-yellow-500 text-xl capitalize font-thin">We Help You Construct Your Home</h1>
                <h1 className="text-xl md:text-2xl lg:text-5xl font-light font-castoro uppercase text-white">Realize your project</h1>
                <h3 className="text-sm md:text-xl l uppercase font-semibold text-white">We offer free consulting and the best project management<br/>
                for your idea, 100% delivery guaranteed. <br />
                See for yourself, get on board now. <br/>
                </h3>
                <div className="flex justify-center gap-10 items-center">
                    <button className="px-2 py-2 lg:px-6 lg:py-4  font-roboto  bg-orange-500 rounded-xl hover:bg-yellow-300 duration-300 text-white text-sm lg:text-xl uppercase font-semibold">buy home</button>
                    <button className="px-2 py-2 lg:px-6 lg:py-4 uppercase font-roboto border hover:border-none rounded-xl hover:bg-white hover:text-black duration-300 text-white text-sm lg:text-xl font-semibold">Continue</button>
                </div>
            </div>
        </div>
    </header>
      </SwiperSlide>

      
    </Swiper>
    

    </>
    
  )
}

export default Header;