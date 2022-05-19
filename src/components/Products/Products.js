import React, { useEffect, useState } from 'react'
import Header from '../Header/Header';
import Product from './Product'
import Basket from '../Basket/Basket'
import '../../style.css'

const Products = ({ onAdd, products }) => {

  

      console.log(products)
  return (
    <>
      <Header />
      <div className='main-container'>
        {
          products ? products?.map((product, i) => (
            <Product key={i} product={product} onAdd={onAdd}/>
        )) : `Loading...`
        }
    </div>
    </>
  )
}

export default Products