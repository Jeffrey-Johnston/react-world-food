import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./Store/CartProvider";

function App() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const showCardhandler = () => {
    setCartIsVisible(true);
  };

  const hideCardHandler = () => {
    return setCartIsVisible(false);
  };

  return (
    <CartProvider>
      {cartIsVisible && <Cart onClose={hideCardHandler} />}
      <Header onShowCart={showCardhandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
