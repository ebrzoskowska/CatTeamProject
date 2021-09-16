import React from 'react'
import classes from './AllProducts.module.css';

export default function Cats({addToCart, info}) {
    return (
        <div className={classes.cats}>  
        {info.map((item, index) => {
          return (
            <div className={classes.catPics} key={index}>
              <img className={classes.allProductsImages} src={item.image.url} alt="cat"></img>
              <p  className={classes.info}>name: {item.name}</p>
              <p className={classes.info}>origin: {item.origin}</p>
              <p className={classes.info}>£{item.adaptability}</p>
              <button onClick={() => addToCart(item)} className={classes.btn} >Add kitty!</button>
            </div>
          );
        })}
      </div> 
    );
}
