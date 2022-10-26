import React from 'react'
import styles from '../about/About.module.scss'

const About = () => {
  return (
    
    <div className={styles.all} id="about">
      <div className={styles.container}>
        <div>
          <h3>History</h3>
          <p>
              My law firm is one of the most highly regarded in Kentucky. 
              Because of my high academic level, reasearch and my many years of experience, I have the extensive knowledge, resources, 
              and connections to help you achieve your goals and plan for the future. 
              For decades, Kentucky residents have trusted me with their legal affairs
          </p>
          <p>
              Since the establishment of my company in 2001, I have defined my success by the results I have delivered for my clients.
              I am a very competitive person and combined with my own case and client management system,
              I will ensure that legal needs of clients are being addressed in a timely and precise manner.
          </p>
        </div>

        <div>
          <h3>Mission and guiding principles</h3>
          
          <p>
            My mission is  a future where a black man can go to court without fear
            where a father can see his kids after a divorce,
            where a victim of sexual harrassment is not scared to come forward,
            where the strong dont hold the power over the weak,
            A future like this requires hard work, a life of danger and struggle, but I am willing to suffer all of it to achieve it.
          </p>

          <p>
            My clients are my top priority. Period. I treat you and your case as if you were a member of my family or a friend.
            A trusting relationship necessitates open communication. You must be aware of what is occurring and, more crucially, comprehend it.
            I endeavor to be approachable and to explain a difficult or
            confusing legal matter so that my clients can make good decisions and feel in control of their lives.
          </p>
        </div>
      </div>
    </div>
    
  )
}

export default About