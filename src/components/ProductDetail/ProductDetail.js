import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Header from '../Header/Header'

const ProductDetail = () => {

 const { id } = useParams()
 const [product, setProduct] = useState()

 useEffect(() => {
    async function fetchMyAPI() {
        let { data } = await axios.get(`https://fakestoreapi.com/products/${id}`)
        setProduct(data)
    }

    fetchMyAPI()
}, [])  

return (
    <div>
      <Header />
      <div className='details'>
        <div className='detail-container'>
          <div className='product-image'>
            <img src={product?.image} alt="" />
          </div>
          <div className='product-detail'>
            <h1>{product?.title}</h1>
            <div className='description'>
              <p>{product?.description}</p>
              <h4>${product?.price}</h4>
            </div>
            <button>Login to buy</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail