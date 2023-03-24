import React from 'react';
import ReactDOM from 'react';
import styles from './FoodExpanded.css';

const Backdrop = ({ onClose }) => {
  return <div className={styles.backdrop} onClick={onClose}></div>
}
const Modal = ({ imgSrc, imgAlt, title, price, clicked, onClose }) => {
  return (
    <div className={styles.modal}>
      <div className={styles['modal-header']}>
        <img className={styles['modal-header__image']} src={imgSrc} alt={imgAlt} />
        <div className={styles['modal-close-icon']} onClick={onClose} >x</div>
      </div>
       <div className={styles['modal-body']}>
        <div className={styles['modal-body__content']}>
          <h2 className={styles['modal-body__title']}>{title}</h2>
          <h2 className={styles['modal-body__price']}>{price}</h2>
        </div>
      </div>
    </div>
  )
}
const FoodExpanded = ({ imgSrc, imgAlt, title, price, clicked, onClose }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={onClose} />,
        document.getElementById('backdrop-root'),
      )}
      {ReactDOM.createPortal(
        <Modal imgAlt={imgAlt} imgSrc={imgSrc} title={title} price={price} onClose={onClose} />,
        document.getElementById('modal-root')
      )}
    </>
  )
}

export default FoodExpanded
