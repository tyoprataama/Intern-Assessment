import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FoodCard } from '../../components/UI/index';
import { dumyData } from '../../json/index';
import BillCard from '../UI/BillCard/BillCard';
import ItemList from '../UI/BillCard/ItemList/ItemList';
import styles from './Home.module.css';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Success
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Your change is saved</h4>
        <p>
          This is just front-end function, your data actually not saved yet!
        </p>
      </Modal.Body>
    </Modal>
  );
}

const Home = () => {
  //  Modal save
  const [modalShow, setModalShow] = React.useState(false);
  //  Total
  const [totalAmount, setTotalAmount] = useState(0);
  //  Modal charges
  const [show, setShow] = useState(false);
  const [prc, setPrc] = useState("");

  const handleInputChange = (event) => {
    setPrc(event.target.value);
  }

  const [cart, setCart] = useState([])
  const addFoodCart = async (data) => {
    let findFoodInCart = await cart.find(i => {
      return i.id === data.id && data.clicked !== false
    });
    if (findFoodInCart) {
      let newCart = [];
      let newFood;

      cart.forEach(cartItem => {
        if(cartItem.id === data.id) {
          newFood = {
            ...cartItem,
            quantity: cartItem.quantity + 1,
            totalAmount: cartItem.price * (cartItem.quantity + 1)
          }
          newCart.push(newFood) 
        } else {
          newCart.push(cartItem);
        }
      });
      setCart(newCart);
    } else {
      let addingFood = {
        ...data,
        'quantity': 1,
        'totalAmount': data.price
      }
      setCart([...cart, addingFood]);
    }
  }
   useEffect(() => {
     let newTotalAmount = 0;
     cart.forEach(icart => {
       newTotalAmount = newTotalAmount + parseInt(icart.totalAmount*1000);
     })
     setTotalAmount(newTotalAmount)
   }, [cart])
  return (
    <div className={styles.home}>
      <section className={styles.food}>
        <div className={styles['food__container']}>
          <article className={styles['food-recommended']}>
            <div className={styles['food-recommended__list']}>
              {dumyData.cumi.map((data) => {
                return (
                  <div onClick={() => addFoodCart(data)}>
                  <FoodCard
                    key={data.id}
                    imgSrc={data.image}
                    imgAlt={data.title}
                    title={data.title}
                    price={data.price}
                  />
                  </div>
                );
              })}
            </div>
          </article>
           <article className={styles['food-recommended']}>
            <div className={styles['food-recommended__list']}>
              {dumyData.sayuran.map((data) => {
                return (
                   <div onClick={() => addFoodCart(data)}>
                  <FoodCard
                    key={data.id}
                    imgSrc={data.image}
                    imgAlt={data.title}
                    title={data.title}
                    price={data.price}
                  />
                  </div>
                );
              })}
            </div>
          </article>
          <article className={styles['food-recommended']}>
            <div className={styles['food-recommended__list']}>
              {dumyData.ikan.map((data) => {
                return (
                   <div onClick={() => addFoodCart(data)}>
                  <FoodCard
                    key={data.id}
                    imgSrc={data.image}
                    imgAlt={data.title}
                    title={data.title}
                    price={data.price}
                  />
                  </div>
                );
              })}
            </div>
          </article>
          <article className={styles['food-recommended']}>
            <div className={styles['food-recommended__list']}>
              {dumyData.minuman.map((data) => {
                return (
                   <div onClick={() => addFoodCart(data)}>
                  <FoodCard
                    key={data.id}
                    imgSrc={data.image}
                    imgAlt={data.title}
                    title={data.title}
                    price={data.price}
                  />
                  </div>
                );
              })}
            </div>
          </article>
          <article className={styles['food-recommended']}>
            <div className={styles['food-recommended__list']}>
              {dumyData.happy.map((data) => {
                return (
                  <div onClick={() => addFoodCart(data)}>
                  <FoodCard
                    key={data.id}
                    imgSrc={data.image}
                    imgAlt={data.title}
                    title={data.title}
                    price={data.price}
                  />
                  </div>
                );
              })}
            </div>
          </article>
        </div>
      </section>

      <section className={styles.bill}>

        {/* Modal */}
        <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Checkout
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <Form>
      <Form.Group className="mb-3" controlId="formBasicInput">
        <Form.Label>Enter Cash</Form.Label>
        <Form.Control type="number" placeholder="32000" id='priceVal' value={prc} onChange={handleInputChange} />
        <Form.Text className="text-muted">
          Harga makanan adalah Rp.{totalAmount}, uang yang harus dikembalikan adalah <strong>Rp.{prc - totalAmount}</strong>.
        </Form.Text>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        </Modal.Body>
      </Modal>

        <BillCard />
        {cart ? cart.map((cartItem, key) => 
          <ItemList
            title={cartItem.title}
            quantity={cartItem.quantity}
            price={cartItem.price}
            key={key}
          /> )
        : 'No Items'
        }
        <div className={styles.container}>
        <button className={styles.btn}>Clear Sale
        </button>
        </div>
        <div className={styles['btn-wrap']}>
          <button className={styles['btn-bill']} onClick={() => setModalShow(true)}>Save Bill</button>
          <button className={styles['btn-bill']}>Print Bill</button>
        </div>
         <div className={styles['btn-wrap']}>
          <button className={styles['btn-icon']}>Icon Split Bill</button>
          <button className={styles['btn-charges']} onClick={() => setShow(true)}>Charges Rp.{totalAmount}</button>
        </div>
         <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)} />
      </section>
    </div>
  );
};

export default Home;
