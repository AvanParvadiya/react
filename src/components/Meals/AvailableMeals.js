import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
// import Meals from "./Meals";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Bowl",
    description: "Healthy... and good food...",
    price: 100.2
  },
  {
    id: "m2",
    name: "Green Bowl",
    description: "Healthy...delicious and good food...",
    price: 100.2
  },
  {
    id: "m3",
    name: "Burger",
    description: "Very tasty",
    price: 50.2
  },
  {
    id: "m4",
    name: "Pizza",
    description: "Delicious pizza and healthy...",
    price: 100.2
  }
];
const AvailableMeals = (props) => {
  const mealsList = DUMMY_MEALS.map((meals) => <MealItem key={meals.id} name={meals.name} description={meals.description} price={meals.price}></MealItem>);
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};
export default AvailableMeals;
