import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Products from './components/Products/Products';
import ProductDetail from './components/ProductDetail/ProductDetail';
import LoginPage from './components/LoginPage/LoginPage';
import Basket from './components/Basket/Basket';

function App() {

  const [products, setProducts] = useState()
  const [basketItems, setBasketItems] = useState([])

  const onAdd = (product) => {
    const isExist = basketItems.find(item => item.id === product.id)

    if (isExist){
      setBasketItems(basketItems.map(item => item.id === product.id ? {...isExist, qty: isExist.qty + 1} : item))
    } else {
      setBasketItems([...basketItems, {...product, qty: 1}])
    }
  }

  const onRemove = (product) => {
    const isExist = basketItems.find(item => item.id === product.id)

    if (isExist.qty === 1){
      setBasketItems(basketItems.filter(item => item.id !== product.id ))
    } else {
      setBasketItems(basketItems.map(item => item.id === product.id ? {...isExist, qty: isExist.qty - 1} : item))
    }
  }

  useEffect(() => {
      async function fetchMyAPI() {
        let { data } = await axios.get('https://fakestoreapi.com/products')
        setProducts(data)
      }
  
      fetchMyAPI()
    }, [])

  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Products onAdd={onAdd} products={products}/>} />
        <Route path="/product/:id" exact element={<ProductDetail />} />
        <Route path="/login" exact element={<LoginPage />} />
        <Route path="/basket" exact element={<Basket onAdd={onAdd} onRemove={onRemove} basketItems={basketItems}/>} />
      </Routes>
    </Router>
  );
}

export default App;
