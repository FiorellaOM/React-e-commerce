import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import CartDetail from "./components/Main/CartDetail";
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
              path="/shop/:id"
              element={
                <ItemListContainer greeting={"Welcome dear Panda Lover!"} />
              }
            />
            <Route path="/shop/item/:slug" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartDetail />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
