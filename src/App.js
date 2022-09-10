import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import ItemDetailContainer from "./components/Main/ItemDetailContainer";
import ItemListContainer from "./components/Main/ItemListContainer";

function App() {
  return (
    <div className="background">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={'Welcome dear Panda Lover!'} />} />
          <Route path="/shop/:id" element={<ItemListContainer greeting={'Welcome dear Panda Lover!'} />} />
          <Route path="/shop/item/:slug" element={<ItemDetailContainer />} />
          {/*  <Route path='/swapi' element={<SwapiContainer/>}/>
      <Route path='/ram' element={<DbzApp/>}/>
      <Route path='/ram/:id' element={<DbzDetail/>}/>
      <Route path='/shop' element={<ItemListContainer/>}/>
      <Route path='/shop/item/:slug' element={<ItemDetailContainer/>}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
