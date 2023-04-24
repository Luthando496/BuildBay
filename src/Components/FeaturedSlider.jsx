import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';




const FeaturedSlider = () => {
  return (
    <>
        <section className="w-full py-14 bg-black/40 my-6">
            <div className="px-16">
                <h1 className="text-2xl uppercase font-roboto tracking-[2px] font-thin text-white">Featured work</h1>
            </div>

            <div className="mt-14 px-16">
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={30}
                slidesPerView={5}
                navigation
                pagination={{ clickable: true }}
                //   scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                //   onSlideChange={() => console.log('slide change')}
                >
                <SwiperSlide>
                    <div className="w-full h-[13rem]">
                    <div className="img w-full h-full">
                        <img src="https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXJjaGl0ZWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="building" className="w-full h-full" />
                    </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full h-[13rem]">
                    <div className="img w-full h-full">
                        <img src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="building" className="w-full h-full" />
                    </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full h-[13rem]">
                    <div className="img w-full h-full">
                        <img src="https://images.unsplash.com/photo-1572883454114-1cf0031ede2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGFyY2hpdGVjdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="building" className="w-full h-full" />
                    </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full h-[13rem]">
                    <div className="img w-full h-full">
                        <img src="https://images.unsplash.com/photo-1582436416930-f533b50a7cd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="building" className="w-full h-full" />
                    </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full h-[13rem]">
                    <div className="img w-full h-full">
                        <img src="https://images.unsplash.com/photo-1566421740223-09d1ec4b6b78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="building" className="w-full h-full" />
                    </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full h-[13rem]">
                    <div className="img w-full h-full">
                        <img src="https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGFyY2hpdGVjdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="building" className="w-full h-full" />
                    </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full h-[13rem]">
                    <div className="img w-full h-full">
                        <img src="https://images.unsplash.com/photo-1611816055460-618287c870bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="building" className="w-full h-full" />
                    </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full h-[13rem]">
                    <div className="img w-full h-full">
                        <img src="https://images.unsplash.com/photo-1578556881767-c2cf0bfc9ea3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="building" className="w-full h-full" />
                    </div>

                    </div>
                </SwiperSlide>


            </Swiper>

            </div>
         

        </section>

    </>
  )
}

export default FeaturedSlider