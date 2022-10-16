import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import AboutUs from "./components/Main/AboutUs";
import Cart from "./components/Main/Cart";
import ItemDetailContainer from "./components/Main/ItemDetailContainer";
import ItemListContainer from "./components/Main/ItemListContainer";
import { CartContextProvider } from "./context/cartContext";

function App() {
  return (
    <div className="background">
      <CartContextProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <ItemListContainer greeting={"Welcome dear Panda Lover!"} />
              }
            />
            <Route
              path="/shop/:param"
              element={
                <ItemListContainer greeting={"Welcome dear Panda Lover!"} />
              }
            />
            <Route path="/shop/item/:slug" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/aboutus" element={<AboutUs />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
