import { useState, useEffect } from "react";
import classes from './AllProducts.module.css';


const AllProductsPage = () => {
    const [cat, setCat] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      onLoad();
    }, []);
  
    const catNames = [
      "Waffles",
      "Ferdinand",
      "Buttons",
      "Jessica",
      "Mulder",
      "Scully",
      "Shoelace",
      "Snickers"
    ];
    const catPrices = [20, 50, 20, 40, 35, 25, 60];
  
    const onLoad = () => {
      fetch("https://api.thecatapi.com/v1/images/search?limit=20")
        .then((response) => response.json())
        .then((data) => {
          setCat(data);
          setLoading(false);
        });
    };
  
    const Cat = () => {
      return (
        <div>
          <div className={classes.cats}>
            {cat.map((item) => {
              return (
                <div>
                  <div className={classes.catPics}>
                    <img className={classes.allProductsImages} src={item.url} alt="cat"></img>
                  </div>
                  <Info />
                </div>
              );
            })}
          </div>
        </div>
      );
    };
  
    const Info = () => {
      for (let i = 0; i < catNames.length; i++) {
        let name = catNames[i];
        console.log(name);
      }
      for (let i = 0; i < catPrices.length; i++) {
        let price = catPrices[i];
        console.log(price);
      }
      return (
        <div className={classes.info}>
          <p>Cat Name Here</p>
          <p>{Info.name}</p>
          {/* these don't work and crash the page - need to get array data to display */}
          <p>Cat Price Here</p>
          <p>£{Info.price}</p>
        </div>
      );
    };
  
    if (loading) {
      return <h1>Loading...</h1>;
    }
    return (
      <div>
        <h1 className={classes.allProductsTitle}>Cats - So Many Cats</h1>
        <Cat />
      </div>
    );
  };
  
  export default AllProductsPage;
  