import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'
import NavBar from '../navBar/NavBar'
import Home from '../home/Home';
import Contact from '../contact/Contact';
import About from '../about/About';
import Reviews from '../reviews/Reviews';


const SharedLayout = () => {
  return (
    <>
        <NavBar />
        {/* <section>      */}
            {/* <Outlet />       */}
            <Home />
            <About />
            <Reviews />
            <Contact />

        {/* </section> */}
        <Footer />
    </>
  )
}

export default SharedLayout