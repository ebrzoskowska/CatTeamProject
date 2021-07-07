import { Link } from 'react-router-dom';
import logo from './logo.svg';

import classes from './MainNavi.module.css';

function MainNavi () {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <img src={logo} alt="Logo" />
            </div>
            
            <nav>
                <ul>
                    <li>
                        <Link to='/'>ALL PRODUCTS</Link>
                    </li>
                    <li>
                        <Link to='/cart'>CART</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavi;