import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Products from './components/Products/Products';
import ProductDetail from './components/ProductDetail/ProductDetail';
import LoginPage from './components/LoginPage/LoginPage';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Products />} />
        <Route path="/product/:id" exact element={<ProductDetail />} />
        <Route path="/login" exact element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
