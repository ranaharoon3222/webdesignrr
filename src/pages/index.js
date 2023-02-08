import React from 'react'
import Banner from '@/components/Banner'
import Services from '@/components/Services'
import Contact from '@/components/Contact'

import Tabs from '@/components/Tabs'
import Slider from '@/components/Slider'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Header } from '@/components/Header'


const Index = () => {
  return (
    <>
    <Navbar/>
    <Header/>
    <Slider/>
    <Banner/>
    <Tabs/>
    <Services/>
    <Contact/>

    <Footer/>
   
    </>
  )
}

export default Index