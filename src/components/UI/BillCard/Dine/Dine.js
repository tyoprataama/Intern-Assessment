import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import styles from './Dine.module.css'

const Dine = () => {
  return (
    <div className={styles.dropdown}>
      <DropdownButton className={styles.btn} variant='custom' id="dropdown-basic" title="Dine In">
      <Dropdown.Item >Dine In</Dropdown.Item>
      <Dropdown.Item >Take Away</Dropdown.Item>
    </DropdownButton>
    </div>
  )
}

export default Dine
