import React, { useState } from 'react';
import { FoodCard } from '../../components/UI/index';
import { dumyData } from '../../json/index';
import BillCard from '../UI/BillCard/BillCard';
import ItemList from '../UI/BillCard/ItemList/ItemList';
import styles from './Home.module.css';

const Home = () => {
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
        <button className={styles.btn}>Clear
        </button>
    </div>
      </section>
    </div>
  );
};

export default Home;
