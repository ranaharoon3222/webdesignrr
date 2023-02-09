import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";



// import required modules
import { Navigation ,Autoplay} from "swiper";

export default function App() {
    return (
        <>
        <div className="">

       
            <Swiper autoplay={true} navigation={true} modules={[Navigation,Autoplay]} className="mySwiper">
                <SwiperSlide>
                    <img className="w-screen" src="/1544001019_1543984511_1539693196_home_slide.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="w-screen" src="/1658845466_7.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="w-screen" src="/1658845648_4.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="w-screen" src="/1658845826_9.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="w-screen" src="/1658846162_5.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="w-screen" src="/1658846393_3.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="w-screen" src="1658846903_avvow.jpg" />
                </SwiperSlide>
            </Swiper>
            </div>
        </>
    );
}
