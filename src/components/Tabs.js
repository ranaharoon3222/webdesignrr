import { useState } from 'react'
import { Tab } from '@headlessui/react'
import { Fragment } from 'react'

export default function Tabs() {
  let [categories] = useState([

    {
      id: 1,
      img: '/1658846162_5.jpg',
      title: "Emperos",
      type: "logo_design"
    },
    {
      id: 2,
      img: '/1582365372_inditress_1920x1080 (1).jpg',
      title: "LaOro",
      type: "logo_design"
    },
    {
      id: 3,
      img: '/1584103054_1920x1080__9_.jpg',
      title: "Magico",
      type: "logo_design"
    },
    // website
    {
      id: 4,
      img: '/1544097148_1526532388_homepage.jpg',
      title: "Gallantry Salon",
      type: "website"
    },
    {
      id: 5,
      img: '/1544095328_1518421844_admantium.jpg',
      title: "Gallantry Salon",
      type: "website"
    },
    {
      id: 6,
      img: '/1544094337_1516273723_pfhoil.jpg',
      title: "Gallantry Salon",
      type: "website"
    },





  ])

  const logos = categories.filter(item => item.type === 'logo_design')
  const websites = categories.filter(item => item.type === 'website')

  return (<>
  

    <div className=" sm:mt-10 ">
      <div className="wrapper w-full max-w-md  px-2 sm:py-16 sm:px-0">
        <Tab.Group>

          <Tab.List className="flex-wrap sm:flex sm:justify-center">

            <Tab as={Fragment}>
              {({ selected }) => (
                /* Use the `selected` state to conditionally style the selected tab. */
                <button
                  className={
                    selected ? 'bg-[#c6c8c8d9] mt-2 sm:mt-[auto] w-[-webkit-fill-available] sm:w-[auto] mr-5 font-bold text-white bg-[#eb7a4a] py-3 px-5 border-0 border-solid rounded-md' : 'bg-[#c6c8c8d9] mt-2 sm:mt-[auto] w-[-webkit-fill-available] sm:w-[auto] mr-5 font-bold py-3 px-5 border-0 border-solid rounded-md  hover:text-white hover:bg-[#eb7a4a]'
                  }
                >
                  Logo Designs
                </button>
              )}
            </Tab>

           


            <Tab as={Fragment}>
              {({ selected }) => (
                /* Use the `selected` state to conditionally style the selected tab. */
                <button
                  className={
                    selected ? 'bg-[#c6c8c8d9] mt-2 sm:mt-[auto] w-[-webkit-fill-available] sm:w-[auto] mr-5 font-bold text-white bg-[#eb7a4a] py-3 px-5 border-0 border-solid rounded-md' : 'bg-[#c6c8c8d9] mt-2 sm:mt-[auto] w-[-webkit-fill-available] sm:w-[auto] mr-5 font-bold py-3 px-5 border-0 border-solid rounded-md  hover:text-white hover:bg-[#eb7a4a]'
                  }
                >
                  Logo Designs
                </button>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                /* Use the `selected` state to conditionally style the selected tab. */
                <button
                  className={
                    selected ? 'bg-[#c6c8c8d9] mt-2 sm:mt-[auto] w-[-webkit-fill-available] sm:w-[auto] mr-5 font-bold text-white bg-[#eb7a4a] py-3 px-5 border-0 border-solid rounded-md' : 'bg-[#c6c8c8d9] mt-2 sm:mt-[auto] w-[-webkit-fill-available] sm:w-[auto] mr-5 font-bold py-3 px-5 border-0 border-solid rounded-md  hover:text-white hover:bg-[#eb7a4a]'
                  }
                >
                  Brochures
                </button>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                /* Use the `selected` state to conditionally style the selected tab. */
                <button
                  className={
                    selected ? 'bg-[#c6c8c8d9] mt-2 sm:mt-[auto] w-[-webkit-fill-available] sm:w-[auto] mr-5 font-bold text-white bg-[#eb7a4a] py-3 px-5 border-0 border-solid rounded-md' : 'bg-[#c6c8c8d9] mt-2 sm:mt-[auto] w-[-webkit-fill-available] sm:w-[auto] mr-5 font-bold py-3 px-5 border-0 border-solid rounded-md  hover:text-white hover:bg-[#eb7a4a]'
                  }
                >
                  Catalogues
                </button>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                /* Use the `selected` state to conditionally style the selected tab. */
                <button
                  className={
                    selected ? 'bg-[#c6c8c8d9] mt-2 sm:mt-[auto] w-[-webkit-fill-available] sm:w-[auto] mr-5 font-bold text-white bg-[#eb7a4a] py-3 px-5 border-0 border-solid rounded-md' : 'bg-[#c6c8c8d9] mt-2 sm:mt-[auto] w-[-webkit-fill-available] sm:w-[auto] mr-5 font-bold py-3 px-5 border-0 border-solid rounded-md  hover:text-white hover:bg-[#eb7a4a]'
                  }
                >
                  Creative Prints
                </button>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                /* Use the `selected` state to conditionally style the selected tab. */
                <button
                  className={
                    selected ? 'bg-[#c6c8c8d9] mt-2 sm:mt-[auto] w-[-webkit-fill-available] sm:w-[auto] mr-5 font-bold text-white bg-[#eb7a4a] py-3 px-5 border-0 border-solid rounded-md' : 'bg-[#c6c8c8d9] mt-2 sm:mt-[auto] w-[-webkit-fill-available] sm:w-[auto] mr-5 font-bold py-3 px-5 border-0 border-solid rounded-md  hover:text-white hover:bg-[#eb7a4a]'
                  }
                >
                  Company Profiles
                </button>
              )}
            </Tab>
            
            
          
            

          </Tab.List>

          <Tab.Panels>
            <Tab.Panel>


              <div className='grid grid-cols-1 sm:grid-cols-3 sm:gap-10'>

                {logos.map((item, index) => {
                  return <div key={index} className="my-5 sm:my-10 sm:w-[400px] border border-solid border-[#868d94] rounded-lg ">
                    <a href=""> <img className=" h-[230px] sm:w-[400px] p-3 object-cover " src={item.img} alt="" /></a>
                    <h1 className=" text-2xl p-5" >{item.title} </h1>


                  </div>

                })}
              </div>

            </Tab.Panel>

            <Tab.Panel>
              <div className='grid grid-cols-1 sm:grid-cols-3 sm:gap-10'>
                {websites.map((item, index) => {
                  return <div key={index} className="my-5 sm:my-10 w-[-webkit-fill-available] sm:w-[400px] border border-solid border-[#868d94] rounded-lg ">
                    <a href=""> <img className=" h-[230px] w-[-webkit-fill-available] sm:w-[400px] p-3 object-cover " src={item.img} alt="" /></a>
                    <h1 className=" text-2xl p-5" >{item.title} </h1>
                  </div>
                })}
              </div>

            </Tab.Panel>
            <Tab.Panel>
              <div className='grid grid-cols-1 sm:grid-cols-3 sm:gap-10'>
                {websites.map((item, index) => {
                  return <div key={index} className="my-5 sm:my-10 w-[-webkit-fill-available] sm:w-[400px] border border-solid border-[#868d94] rounded-lg ">
                    <a href=""> <img className=" h-[230px] w-[-webkit-fill-available] sm:w-[400px] p-3 object-cover " src={item.img} alt="" /></a>
                    <h1 className=" text-2xl p-5" >{item.title} </h1>
                  </div>
                })}
              </div>

            </Tab.Panel>
            <Tab.Panel>
              <div className='grid grid-cols-1 sm:grid-cols-3 sm:gap-10'>
                {websites.map((item, index) => {
                  return <div key={index} className="my-5 sm:my-10 w-[-webkit-fill-available] sm:w-[400px] border border-solid border-[#868d94] rounded-lg ">
                    <a href=""> <img className=" h-[230px] w-[-webkit-fill-available] sm:w-[400px] p-3 object-cover " src={item.img} alt="" /></a>
                    <h1 className=" text-2xl p-5" >{item.title} </h1>
                  </div>
                })}
              </div>

            </Tab.Panel>
            <Tab.Panel>


              <div className='grid grid-cols-1 sm:grid-cols-3 sm:gap-10'>

                {logos.map((item, index) => {
                  return <div key={index} className="my-5 sm:my-10 sm:w-[400px] border border-solid border-[#868d94] rounded-lg ">
                    <a href=""> <img className=" h-[230px] sm:w-[400px] p-3 object-cover " src={item.img} alt="" /></a>
                    <h1 className=" text-2xl p-5" >{item.title} </h1>


                  </div>

                })}
              </div>

            </Tab.Panel>
            <Tab.Panel>


              <div className='grid grid-cols-1 sm:grid-cols-3 sm:gap-10'>

                {logos.map((item, index) => {
                  return <div key={index} className="my-5 sm:my-10 sm:w-[400px] border border-solid border-[#868d94] rounded-lg ">
                    <a href=""> <img className=" h-[230px] sm:w-[400px] p-3 object-cover " src={item.img} alt="" /></a>
                    <h1 className=" text-2xl p-5" >{item.title} </h1>


                  </div>

                })}
              </div>

            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>

    </div>
  </>
  )
}
