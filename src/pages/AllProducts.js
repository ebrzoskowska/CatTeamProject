import { useState, useEffect } from "react";
import classes from './AllProducts.module.css';
import logo from '../components/logo.svg';

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

// function which will change pages cart/all products
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

// map method looping throug array of cats info
  const CatPics = () => {
    return (
    <div className={classes.cats}>  
        {info.map((item, index) => {
            return (
                <div className={classes.catPics} key={index}>
                    <img className={classes.allProductsImages} src={item.image.url} alt="cat"></img>
                    <p  className={classes.info}>name: {item.name}</p>
                    <p className={classes.info}>origin: {item.origin}</p>
                    <p className={classes.info}>£{item.image.width}</p>
                    <button onClick={() => addToCart(item)} className={classes.btn} >Add kitty!</button>
                </div>
            );
        })}
    </div> 
    );
  };   

// map method looping throug array of cats images
  const Cart = () => {
    return (
    <div className={classes.cats}>  
        {cart.map((item, index) => {
            return (
              <div className={classes.catPics} key={index}>
                <img className={classes.allProductsImages} src={item.image.url} alt="cat"></img>
                  <p  className={classes.info}>name: {item.name}</p>
                  <p className={classes.info}>origin: {item.origin}</p>
                  <p className={classes.info}>£{item.image.width}</p>
                  <button onClick={() => removeFromCart(item)} className={classes.btn} >Remove</button>
              </div>
            );
        })}
    </div> 
    );
};     
 
// return images from data array    
return (
  <div>    
    <Header />      
    {page === PAGE_PRODUCT && CatPics()}
    {page === PAGE_CART && Cart()}
  </div>
  ); 
};
  
export default AllProductsPage;
