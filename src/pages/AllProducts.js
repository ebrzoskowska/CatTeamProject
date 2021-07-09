import { useState, useEffect } from "react";
import classes from './AllProducts.module.css';
// import CartPage from "./Cart";

const AllProductsPage = () => {

// empty array for cats info
  const [info, setInfo] = useState([]);

// fetch info from cats API and store them in empty array data
  const infoFetch = async () => {
    const response = await fetch("https://api.thecatapi.com/v1/breeds?limit=20&page=0");
    const info = await response.json();
    setInfo(info)
}   
 
  const [name, setName] = useState([]);
  const [origin, setOrigin] = useState([]);
  const [price, setPrice] = useState([]);
  const [totalPrice, setTotalPrice] = useState();

  const [showCart, setShowCart] = useState(false);


// useEffect trigger infoFetch to fetch images from Api after page onload
  useEffect(() => {
    infoFetch()
  }, [])

// map method looping throug array ofcat images
  const CatPics = () => {
    return (
    <div>
    <div>
        <Panel /> 
        {/* work out how to put to the side later */}
      </div> 
    <div className={classes.cats}>  
        {info.map((item) => {
           return (
                
                <div className={classes.catPics}>
                    <img className={classes.allProductsImages} src={item.image.url} alt="cat"></img>
                    <p  className={classes.info}>Breed: {item.name}</p>
                    <p className={classes.info}>Origin: {item.origin}</p>
                    <p className={classes.info}>£{item.image.width}</p>
                    <button className={classes.btn} onClick={() => 
                    {const newName = item.name;  // I know this is messy - I put it here because when it was in its own function it wasn't accessing the values
                      setName(name => [...name, newName]); 
                      const newOrigin = item.origin;
                      setOrigin(origin => [...origin, newOrigin]); 
                      const newPrice = item.image.width;
                      setPrice(price => [...price, newPrice]); 
                      setShowCart(true);
                    }}>Add kitty!</button>
                </div>
            );
        })}
    </div> 
    </div>
    );
  };   


const Panel = () => {

 let newPrice =  0;

for (let i = 0; i < price.length; i++) {
  newPrice = newPrice + price[i]; 
  setTotalPrice(newPrice) 
}
  return( 
   <div className="cart" style={showCart ? {} : {display: 'none'}}>  
   {/* style stops it appearing when empty using showCart useState */}
    <h2>Your Cart</h2>
    <h3>Your Selected Kitties:</h3>
    <p>Breed: {name + ", "}</p>
    <p>Origin: {origin + ", "}</p>
    <p>Prices: {price + ", "}</p>
    <h3>Total Price: £{totalPrice}</h3>
  </div>
  )
}


// return images from data array    
return (
  <div>          
      <CatPics />        
    </div>
  ); 
};


export default AllProductsPage;
