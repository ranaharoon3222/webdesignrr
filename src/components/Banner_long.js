import React from 'react'

const Banner_long = () => {
    return (
        <>
            <div className="bg-[#13191F] text-white h-[300px] mt-[-40px]">
                <div className="wrapper">
                    <div className='line_container py-10'>
                        <div className='line3'>
                        </div>
                    </div>
                    <h1 className='text-center text-2xl sm:text-4xl font-semibold mb-10'>
                        WORD OF APPRECIATION
                    </h1>
                    <div className='text-center mt-20'>
                        <a href=""><button className='btn1 px-5' >See All Testimonials</button></a></div>
                </div>
            </div>
            {/* second banner */}
            <div className="  h-[300px]">
                <div className="wrapper">
                    <div className='line_container py-10'>
                        <div className='line2'>
                        </div>
                    </div>
                    <h1 className='text-center text-2xl sm:text-4xl font-semibold mb-10'>
                    OUR PRESTIGIOUS CLIENTS
                    </h1>
                    <div className='text-center mt-20'>
                        <a href=""><button className='btn2 px-5' >See All Clients</button></a></div>
                </div>
            </div>
        </>
    )
}

export default Banner_long