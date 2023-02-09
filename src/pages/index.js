import React from 'react'
import Banner from '@/components/Banner'
import Services from '@/components/Services'

import Tabs from '@/components/Tabs'
import Slider from '@/components/Slider'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Main_Banner from '@/components/Main_Banner'
import Testimonials from '@/components/Testimonials'



const Index = () => {
  return (
    <>
    <Navbar/>
    <Slider/>
    <Main_Banner/>
    <Tabs/>
    <Banner/>
    <Services/>
    <Testimonials/>


    <Footer/>
   
    </>
  )
}

export default Index