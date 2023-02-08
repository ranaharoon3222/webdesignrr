import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default function Slider() {
    return (
        <>
            <div className="">
                <div className="wrapper">
                    <h1 className="text-center py-5 sm:py-10 font-bold  text-2xl sm:text-4xl">OUR FLAGSHIP PROJECTS</h1>
                    <p className=" text-center pb-5 sm:pb-10 ">PROVIDING RADICAL WEB & BRANDING SOLUTIONS ACROSS THE GLOBE SINCE 1999</p>
                </div>



                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    
                    spaceBetween={0}
                    slidesPerView={"2"}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 150,
                        depth: 100,
                        modifier: 2,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src="/1544001019_1543984511_1539693196_home_slide.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/1658845466_7.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/1658845648_4.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/1658845826_9.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/1658846162_5.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/1658846393_3.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="1658846903_avvow.jpg" />
                    </SwiperSlide>

                </Swiper>
            </div>
        </>
    );
}
