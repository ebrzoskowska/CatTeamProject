import { useState, useEffect } from "react";
import classes from './AllProducts.module.css';
import logo from '../components/logo.svg';
import Cats from "./Cats";
import Cart from "./Cart";

const PAGE_PRODUCT = 'products';
const PAGE_CART = 'cart';

const AllProductsPage = () => {

// empty array for cats info
  const [info, setInfo] = useState([]);
  
// empty array for cart products
  const [cart, setCart] = useState([]);  

// state for products and cart view
  const [page, setPage] = useState(PAGE_PRODUCT);   

// fetch info from cats API and store them in empty array data
  const infoFetch = async () => {
    const response = await fetch("https://api.thecatapi.com/v1/breeds?limit=20&page=0");
    const info = await response.json();
    setInfo(info)
}   
  
// useEffect trigger infoFetch to fetch images from Api after page onload
  useEffect(() => {
    infoFetch()
  }, [])

// function which will add cat to the cart
  const addToCart = (item) => {
    setCart([...cart, {...item}]);
  };   

// function which will remove cat from the cart
 const removeFromCart = (itemToRemove) => {
   setCart(
     cart.filter((item) => item !== itemToRemove)
   );
 };

// funtion which will clear all cats from the cart
  const clearAll = () => {
    setCart([]);
  };

//
  const navigateTo = (nextPage) => {
    setPage(nextPage); 
  };

// header with logo
  const Header = () => {
    return (
      <header className={classes.header}>
        <div className={classes.logo}>
          <img src={logo} alt="Logo" />
        </div>
        <button onClick={() => navigateTo(PAGE_PRODUCT)} className={classes.btn}>ALL PRODUCTS</button>
        <button onClick={() => navigateTo(PAGE_CART)} className={classes.btn}>GO TO CART ( {cart.length} )</button>
      </header>
    )
  }

// return images from data array    
return (
  <div>    
    <Header />      
    {page === PAGE_PRODUCT && (
      <Cats addToCart={addToCart} info={info} />
    )}
    {page === PAGE_CART && (
      <Cart removeFromCart={removeFromCart} clearAll={clearAll} cart={cart} />
    )}
  </div>
  ); 
};
  
export default AllProductsPage;
