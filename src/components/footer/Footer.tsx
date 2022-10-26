import React from 'react'
import styles from '../footer/Footer.module.scss'

const Footer = () => {
  return (
    <footer>
      <div > Call me: <a className={styles.link} href="tel:+1-847-555-7856<">1-847-555-7856</a> </div>
      <div>
        Located at: <a className={styles.link} target="_blank" href="https://www.google.com/maps/place/E+23rd+St,+Owensboro,+KY,+USA/@37.7535338,-87.1104944,16z/data=!4m5!3m4!1s0x886fba60ea6dc83d:0x7cb53305e2fb6eb1!8m2!3d37.7537204!4d-87.1060097" rel="noreferrer">
          East 23rd Street, Owensboro, Kentucky, USA
        </a> 
      </div>
      <div>Hours: Mo-Fri 09:00-17:00</div>

    </footer>
    
  )
}

export default Footer