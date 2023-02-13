import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";

const Testimonials = () => {
    return (
        <>
            <h2 className="text-center mt-10 text-2xl font-bold md:text-4xl">
                What's our customers say
            </h2>
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                <SwiperSlide>
                    <div className="py-16">
                        <div className="xl:container m-auto px-6  md:px-12 xl:px-6">

                            <div className="swiper mySwiper">
                                <div className="swiper-wrapper pb-6">
                                    <div className="swiper-slide !bg-transparent">
                                        <div className="mx-auto space-y-6 text-center md:w-8/12 lg:w-7/12">
                                            <img
                                                className="mx-auto !h-16 !w-16 rounded-full"
                                                src="https://tailus.io/sources/blocks/tested/preview/images/avatars/third_user.webp"
                                                alt="user avatar"
                                                height={220}
                                                width={220}
                                                loading="lazy"
                                            />
                                            <p>
                                                <span className="font-serif">"</span> Lorem ipsum dolor sit amet
                                                consectetur adipisicing elit. Quaerat repellat perspiciatis
                                                excepturi est. Non ipsum iusto aliquam consequatur repellat
                                                provident, omnis ut, sapiente voluptates veritatis cum deleniti
                                                repudiandae ad doloribus. <span className="font-serif">"</span>
                                            </p>
                                            <div>
                                                <h6 className="text-lg font-semibold leading-none">John Doe</h6>
                                                <span className="text-xs text-gray-500">Product Designer</span>
                                            </div>

                                            <img
                                                class="mx-auto !w-28"
                                                src="https://tailus.io/sources/blocks/tested/preview/images/clients/client-3.png"
                                                alt="company logo"
                                                height="400"
                                                width="142"
                                                loading="lazy"
                                            />

                                        </div>
                                    </div>


                                </div>
                                <div className="swiper-pagination" />
                            </div>
                        </div>
                    </div></SwiperSlide>
                <SwiperSlide>
                    <div className="py-16">
                        <div className="xl:container m-auto px-6  md:px-12 xl:px-6">
                            
                            <div className="swiper mySwiper">
                                <div className="swiper-wrapper pb-6">
                                    <div className="swiper-slide !bg-transparent">
                                        <div className="mx-auto space-y-6 text-center md:w-8/12 lg:w-7/12">
                                            <img
                                                className="mx-auto !h-16 !w-16 rounded-full"
                                                src="https://tailus.io/sources/blocks/tested/preview/images/avatars/third_user.webp"
                                                alt="user avatar"
                                                height={220}
                                                width={220}
                                                loading="lazy"
                                            />
                                            <p>
                                                <span className="font-serif">"</span> Lorem ipsum dolor sit amet
                                                consectetur adipisicing elit. Quaerat repellat perspiciatis
                                                excepturi est. Non ipsum iusto aliquam consequatur repellat
                                                provident, omnis ut, sapiente voluptates veritatis cum deleniti
                                                repudiandae ad doloribus. <span className="font-serif">"</span>
                                            </p>
                                            <div>
                                                <h6 className="text-lg font-semibold leading-none">John Doe</h6>
                                                <span className="text-xs text-gray-500">Product Designer</span>
                                            </div>

                                            <img
                                                class="mx-auto !w-28"
                                                src="https://tailus.io/sources/blocks/tested/preview/images/clients/client-3.png"
                                                alt="company logo"
                                                height="400"
                                                width="142"
                                                loading="lazy"
                                            />

                                        </div>
                                    </div>


                                </div>
                                <div className="swiper-pagination" />
                            </div>
                        </div>
                    </div></SwiperSlide>
                <SwiperSlide>
                    <div className="py-16">
                        <div className="xl:container m-auto px-6  md:px-12 xl:px-6">
                            
                            <div className="swiper mySwiper">
                                <div className="swiper-wrapper pb-6">
                                    <div className="swiper-slide !bg-transparent">
                                        <div className="mx-auto space-y-6 text-center md:w-8/12 lg:w-7/12">
                                            <img
                                                className="mx-auto !h-16 !w-16 rounded-full"
                                                src="https://tailus.io/sources/blocks/tested/preview/images/avatars/third_user.webp"
                                                alt="user avatar"
                                                height={220}
                                                width={220}
                                                loading="lazy"
                                            />
                                            <p>
                                                <span className="font-serif">"</span> Lorem ipsum dolor sit amet
                                                consectetur adipisicing elit. Quaerat repellat perspiciatis
                                                excepturi est. Non ipsum iusto aliquam consequatur repellat
                                                provident, omnis ut, sapiente voluptates veritatis cum deleniti
                                                repudiandae ad doloribus. <span className="font-serif">"</span>
                                            </p>
                                            <div>
                                                <h6 className="text-lg font-semibold leading-none">John Doe</h6>
                                                <span className="text-xs text-gray-500">Product Designer</span>
                                            </div>

                                            <img
                                                class="mx-auto !w-28"
                                                src="https://tailus.io/sources/blocks/tested/preview/images/clients/client-3.png"
                                                alt="company logo"
                                                height="400"
                                                width="142"
                                                loading="lazy"
                                            />

                                        </div>
                                    </div>


                                </div>
                                <div className="swiper-pagination" />
                            </div>
                        </div>
                    </div></SwiperSlide>


            </Swiper>



        </>

    )
}

export default Testimonials