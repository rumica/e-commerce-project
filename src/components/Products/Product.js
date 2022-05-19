import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../../style.css'

const Product = ({ onAdd, product }) => {

  const [totalPrice, setTotalPrice] = useState([])

  const handleBasket = () => {
      console.log(product.price)
  }

  


  return (
    <div className='product-container'>
        <Link to={`/product/${product.id}`}>
          <img src={product.image} alt="" />
        </Link>
          <p>{product.title}</p>
          <div className='price'>${product.price}</div>
        <button onClick={() => onAdd(product)}>Add to basket</button>
    </div>
  )
}

export default Product