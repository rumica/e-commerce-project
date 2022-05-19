import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Header from '../Header/Header';
import Product from './Product'
import '../../style.css'

const Products = () => {

    const [products, setProducts] = useState()

    useEffect(() => {
        async function fetchMyAPI() {
          let { data } = await axios.get('https://fakestoreapi.com/products')
          setProducts(data)
        }
    
        fetchMyAPI()
      }, [])

      console.log(products)
  return (
    <>
      <Header />
      <div className='main-container'>
        {
          products ? products?.map((product, i) => (
            <Product key={i} product={product}/>
        )) : `Loading...`
        }
    </div>
    </>
  )
}

export default Products