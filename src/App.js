import { Fragment,useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
// import Card from "./components/UI/Card";
function App() {
  const [isCartShow,CartVisiblity]=useState(false);

  const showCart=()=>{
    CartVisiblity(true);
  }
  const hideCart=()=>{
    CartVisiblity(false);
  }
  return (
    <Fragment>
      { isCartShow && <Cart onHideCart={hideCart}/>  }
      <Header onShowCart={showCart} ></Header>
      <main>
        <Meals></Meals>
      </main>
    </Fragment>
  );
}

export default App;
