import MealItemForm from "./MealItemForm";
import classes from "./MealItems.module.css";
const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`; //inject dollar sign with string and with props.price upto 2 points
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm></MealItemForm>
      </div>
    </li>
  );
};
export default MealItem;
