import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.icon1}>icon</div>
      <h3 className={styles.title}>New Costumer</h3>
      <div className={styles.icon2}>icon</div>
    </div>
  )
}

export default Header
