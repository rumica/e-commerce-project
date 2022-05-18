import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../../style.css'

const Product = ({ product }) => {

  return (
    <div className='product-container'>
        <Link to={`/product/${product.id}`}>
          <img src={product.image} alt="" />
        </Link>
          <p>{product.title}</p>
          <div className='price'>${product.price}</div>
        <button>Add to basket</button>
    </div>
  )
}

export default Product