import React,{useContext} from 'react';
import Head from 'next/head';
import OrderItem from '@components/OrderItem';
import styles from '@styles/Checkout.module.scss';
import AppContext from '@context/AppContext';

const Checkout = () => {
  const {state} = useContext(AppContext);
  
  return (
    <>
      <Head>
        <title>Checkout</title>
      </Head>
      <div className={styles.Checkout}>
        <div className={styles['Checkout-container']}>
          <h1 className={styles.title}>My order</h1>
          <div className={styles['Checkout-content']}>
            <div className={styles.order}>
              <p>
                <span>18/5/2022</span>
                <span>{state.cart.length} articles</span>
              </p>
              <p>{`$${state.sumTotal}`}</p>
            </div>
          </div>
          {state.cart.map((product) => (
            <OrderItem product={product} key={product.id}/>
          ))}
        </div>
      </div>
    </>
  );
};

export default Checkout;
