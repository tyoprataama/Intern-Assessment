import React from 'react'
import styles from './ItemList.module.css'

const ItemList = ({title, quantity, price}) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <span>{title}</span>
        <span>x{quantity}</span>
        <span>{price}</span>
      </div>
    </div>
  )
}

export default ItemList
