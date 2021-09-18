import { Fragment } from "react";
import meals from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCardButton";
function Header(props) {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Meals</h1>
        <HeaderCartButton onClick={props.onShowCart} ></HeaderCartButton>
      </header>
      <div className={classes["main-image"]}>
        <img src={meals} alt="Delicious food " />
      </div>
    </Fragment>
  );
}
export default Header;
