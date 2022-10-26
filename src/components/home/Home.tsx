import React from 'react'
import styles from '../home/Home.module.scss'

const Home = () => {
  return (
    <div className={styles.container} id="home">
      <div className={styles.profile}>
        <img className={styles.pic} src="https://www.yourfreecareertest.com/wp-content/uploads/2016/07/become_a_lawyer.jpg" width="400px" height="300px"alt="mr.paul" />
        <div>
          <hr />
          <h1 className={styles.huge}>The right lawyer makes ALL the difference </h1>
          <h1 className={styles.big}>Law firm, by Paul Folsom</h1>
          <hr />
          <h2>If you don't want to fall, you better call Paul</h2>
        </div>
      </div>
      <hr />
      <hr />
      <hr />
      <h3>With an experience of 15+ years I will personally identify, help you with your legal problems and create a stable relationship of trust</h3>
      <hr />
      <hr />
      <p><span>Contact me</span> and we will start right away</p>
      <br />
      <br />
      <br />
      <br />
    </div>
  )
}

export default Home