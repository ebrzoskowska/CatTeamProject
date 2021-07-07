import classes from './Layout.module.css';
import MainNavi from './MainNavi';

function Layout(props) {
    return (
        <div>
            <MainNavi />
            <main className={classes.main}>{props.children}</main>
        </div>
    )
}

export default Layout;