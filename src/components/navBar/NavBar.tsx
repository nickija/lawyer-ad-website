import React from 'react'
import styles from '../navBar/NavBar.module.scss'
//import { NavLink, NavigateFunction, useNavigate } from 'react-router-dom'
import {NavHashLink } from "react-router-hash-link"

const NavBar = () => {

  //const navigate: NavigateFunction = useNavigate();

  // function logoClick(): void {
  //   navigate("/home")
  // }

  // function contact(): void {
  //   navigate("/contact")
  // }

  const scrollWithOffset = (el: any) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -120; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
}
 
  return (
      <header>
          <nav>
              <NavHashLink scroll={scrollWithOffset} to="#home"className={styles.logo} /*onClick={logoClick}*/>
                <img src="https://www.pngkey.com/png/detail/214-2142812_law-logo-png-lawyer.png" width="80px" alt="" />
                <div>
                  <h1>Paul Folsom</h1>
                  Law firm
                </div>
              </NavHashLink>
              {/* <NavLink style={({isActive}) => {return {textDecoration: 'none', color: isActive ? 'brown' : 'grey'}}} to='/home'>Home</NavLink>
              <NavLink style={({isActive}) => {return {textDecoration: 'none', color: isActive ? 'brown' : 'grey'}}} to='/about'>About</NavLink>
              <NavLink style={({isActive}) => {return {textDecoration: 'none', color: isActive ? 'brown' : 'grey'}}} to='/reviews'>Reviews</NavLink>
              <NavLink style={({isActive}) => {return {textDecoration: 'none', color: isActive ? 'brown' : 'grey'}}} to='/contact'>Contact</NavLink> */}

              <NavHashLink style={({isActive}) => {return {textDecoration: 'none', color: isActive ? 'brown' : 'grey'}}} scroll={scrollWithOffset} smooth to='#home'>Home</NavHashLink>
              <NavHashLink style={({isActive}) => {return {textDecoration: 'none', color: isActive ? 'brown' : 'grey'}}} scroll={scrollWithOffset} smooth to='#about'>About</NavHashLink>
              <NavHashLink style={({isActive}) => {return {textDecoration: 'none', color: isActive ? 'brown' : 'grey'}}} scroll={scrollWithOffset} smooth to='#reviews'>Reviews</NavHashLink>
              <NavHashLink style={({isActive}) => {return {textDecoration: 'none', color: isActive ? 'brown' : 'grey'}}} scroll={scrollWithOffset} smooth to='#contact'>Contact</NavHashLink>

              <a href="#contact" className={styles.btn} /*onClick={contact}*/>Request free consultation</a>
          </nav>
      </header>
  )
}

export default NavBar   