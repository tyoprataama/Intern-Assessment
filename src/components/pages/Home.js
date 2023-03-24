import React from 'react';
import { FoodCard } from '../../components/UI/index';
import { dumyData } from '../../json/index';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div>
      <section className={styles.food}>
        <div className={styles['food__container']}>
          <article className={styles['food-recommended']}>
            <div className={styles['food-recommended__list']}>
              {dumyData.cumi.map((data) => {
                return (
                  <FoodCard
                    key={data.id}
                    imgSrc={data.image}
                    imgAlt={data.title}
                    title={data.title}
                    price={data.price}
                  />
                );
              })}
            </div>
          </article>
           <article className={styles['food-recommended']}>
            <div className={styles['food-recommended__list']}>
              {dumyData.sayuran.map((data) => {
                return (
                  <FoodCard
                    key={data.id}
                    imgSrc={data.image}
                    imgAlt={data.title}
                    title={data.title}
                    price={data.price}
                  />
                );
              })}
            </div>
          </article>
          <article className={styles['food-recommended']}>
            <div className={styles['food-recommended__list']}>
              {dumyData.ikan.map((data) => {
                return (
                  <FoodCard
                    key={data.id}
                    imgSrc={data.image}
                    imgAlt={data.title}
                    title={data.title}
                    price={data.price}
                  />
                );
              })}
            </div>
          </article>
          <article className={styles['food-recommended']}>
            <div className={styles['food-recommended__list']}>
              {dumyData.minuman.map((data) => {
                return (
                  <FoodCard
                    key={data.id}
                    imgSrc={data.image}
                    imgAlt={data.title}
                    title={data.title}
                    price={data.price}
                  />
                );
              })}
            </div>
          </article>
          <article className={styles['food-recommended']}>
            <div className={styles['food-recommended__list']}>
              {dumyData.happy.map((data) => {
                return (
                  <FoodCard
                    key={data.id}
                    imgSrc={data.image}
                    imgAlt={data.title}
                    title={data.title}
                    price={data.price}
                  />
                );
              })}
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Home;
