import React, { useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/hero/Hero'
import Footer from '../components/Footer/Footer'
import ScrollToTop from 'react-scroll-to-top'
import Loader from './Loader'

export default function Home() {
  const [loader, setLoader] = useState(true)
  setTimeout(() => {
    setLoader(false)
  }, 2000);
  return (
    <>
      {loader ? <Loader /> :
        <div>
          <Navbar />
          <div className='container'>
            <Hero />
          </div>
          <Footer />

          <ScrollToTop smooth color='white' style={{ background: 'black' }} />
        </div>}
    </>
  )
}
