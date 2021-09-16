import React from 'react'
import classes from './AllProducts.module.css';

export default function Cart({removeFromCart, clearAll, cart}) {

  const getSum = () => {
    return cart.reduce((sum, {adaptability}) => sum + adaptability, 0);
  }

    return (
      <div className={classes.main}> 
{/* that is condition for hide/show in react */}
       {cart.length > 0 && (
           <button onClick={clearAll} className={classes.btn}>Clear All</button>
        )}
        <h2>Total cost: £{getSum()}</h2>
        <div className={classes.cats}>         
        {cart.map((item, index) => {
          return (
            <div className={classes.catPics} key={index}>
              <img className={classes.allProductsImages} src={item.image.url} alt="cat"></img>
              <p  className={classes.info}>name: {item.name}</p>
              <p className={classes.info}>origin: {item.origin}</p>
              <p className={classes.info}>£{item.adaptability}</p>
              <button onClick={() => removeFromCart(item)} className={classes.btn} >Remove</button>
            </div>
            );
          })}
        </div> 
      </div>
    );
}