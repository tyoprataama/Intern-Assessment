import React from 'react';
import styles from './FoodCard.module.css';


const FoodCard = ({imgSrc, imgAlt, title, price, clicked}) => {
  return (
    <>
       <div className={styles.card}>
        <div className={styles['card-body']}>
        <img className={styles['card-img']} src={imgSrc} alt={imgAlt} />
          <h6 className={styles['card-title']}>{title}</h6>
        </div>
      </div>
    </>
  )
}

export default FoodCard;
