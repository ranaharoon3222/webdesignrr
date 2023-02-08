import React from 'react'
import Banner from '@/components/Banner'
import Services from '@/components/Services'
import Site_design from '@/components/Site_design'
import Banner_long from '@/components/Banner_long'
import Service_offer from '@/components/Service_offer'
import Contact from '@/components/Contact'

import Tabs from '@/components/Tabs'
import Slider from '@/components/Slider'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'


const Index = () => {
  return (
    <>
    <Navbar/>
    <Slider/>
    <Banner/>
    <Tabs/>
    <Services/>
    <Site_design/>
    <Banner_long/>
    <Contact/>
    <Service_offer/>
    <Footer/>
   
    </>
  )
}

export default Index