import React from 'react'
import styles from '../reviews/Reviews.module.scss'
import data from '../../data'

const Reviews = () => {
  const reviewArray = data.map(review => 
    <div className={styles.reviews} >
        <div className={styles.rating}>
            <img src="https://www.freepnglogos.com/uploads/star-png/star-vector-png-transparent-image-pngpix-21.png" width="20px" alt="star" /> 
            {review.stars}
            
        </div>
        <br />
        <div>
            {review.message} 
        </div>
        <br />
        <div>
            
            -{review.name}
        </div>   
    </div>)
  return (
    <div className={styles.all} id="reviews">
        <div className={styles.container}>
            {reviewArray}
        </div>
    </div>
  )
}

export default Reviews