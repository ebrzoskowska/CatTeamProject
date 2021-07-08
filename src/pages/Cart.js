
import classes from './AllProducts.module.css';



function CartPage() {
    const {name} = require('./AllProducts.js')
    console.log(name)
    return (
        <section>
            <h1>Your cart</h1>
            <div>
            <p>Your kitties:</p>
                    <p className={classes.info}>Name: {name}</p>
                    <p className={classes.info}>Origin:  </p>
                    <p className={classes.info}>Price: £</p> 
                    {/* this doesn't work, tried it on AllProducts page as pop-up panel instead. If that works, maybe delete this page? */}
            <h2>Total price:</h2>
            </div>
        </section>
    )
}

export default CartPage; 