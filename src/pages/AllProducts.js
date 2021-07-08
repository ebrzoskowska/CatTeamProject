import { useState, useEffect } from "react";
import classes from './AllProducts.module.css';

const AllProductsPage = () => {

// empty array for cats info
  const [info, setInfo] = useState([]);

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

// map method looping throug array ofcat images
  const CatPics = () => {
    return (
    <div className={classes.cats}>  
        {info.map((item) => {
            return (
                <div className={classes.catPics}>
                    <img className={classes.allProductsImages} src={item.image.url} alt="cat"></img>
                    <p  className={classes.info}>name: {item.name}</p>
                    <p className={classes.info}>origin: {item.origin}</p>
                    <p className={classes.info}>£{item.image.width}</p>
                    <button className={classes.btn} >Add kitty!</button>
                </div>
            );
        })}
    </div> 
    );
  };   
  
// return images from data array    
return (
  <div>          
      <CatPics />        
    </div>
  ); 
};
  
export default AllProductsPage;
