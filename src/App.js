import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import ProductDetail from './components/ProductDetail/ProductDetail';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Products />} />
        <Route path="/product/:id" exact element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
