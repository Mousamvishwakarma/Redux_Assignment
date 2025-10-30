// src/App.js
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';


import Home from './Home';
import { Header } from './components/header';
import Cart from './Cart';

import ProductDetail from './ProductDetail';
import Ratting from './Ratting';
import Reviews from './review';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            
            <Route path="/product_detail/:id" element={<ProductDetail />}>
              <Route path="reviews" element={<Reviews />} />
              <Route path="ratting" element={<Ratting />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
