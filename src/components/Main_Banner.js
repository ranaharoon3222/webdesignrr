import React from 'react'

const Main_Banner = () => {
    return (
        <>
        
            <div className=" text-center bg-[url('https://png.pngtree.com/thumb_back/fh260/back_our/20190614/ourmid/pngtree-blue-technology-web-banner-image_122453.jpg')] py-[100px] bg-center bg-no-repeat bg-cover">

                <h1 className='text-white text-3xl sm:text-7xl my-5 font-bold'>Search Portfolio</h1>
                
            </div>
            <form className='px-10 sm:px-0 mb-10 sm:mb-0 mt-[-30px]  sm:max-w-[800px] m-auto'>
                <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only ">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5  " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input type="search" id="default-search" className="outline-none block w-full p-4 pl-10 text-sm  border rounded-lg bg-gray-50 focus:ring-blue-500   dark:placeholder-gray-400  dark:focus:ring-blue-500  text-black" placeholder="Search" required />
                        <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                </div>
            </form>
            
        </>

    )
}

export default Main_Banner