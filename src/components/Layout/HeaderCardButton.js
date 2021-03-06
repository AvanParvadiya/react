import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButtons.module.css';
const HeaderCartButton=props=>{
    return <button className={classes.button} onClick={props.onClick} >
        <span className={classes.icon}>
            <CartIcon></CartIcon>
        </span>
        <span>
            Your cart
        </span>
        <span className={classes.badge}>3</span>
    </button>
}
export default HeaderCartButton;