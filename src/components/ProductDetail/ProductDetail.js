import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Product from '../Products/Product'

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
    <div>ProductDetail {product?.title}</div>
  )
}

export default ProductDetail