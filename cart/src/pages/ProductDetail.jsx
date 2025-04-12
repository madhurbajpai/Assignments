import React, { useState,useEffect } from 'react'
import {useParams} from 'react-router-dom'
import { useCart } from '../context/CartContext'
import './ProductDetail.css'
const ProductDetail = () => {

    const {id} = useParams()
    const {addToCart} = useCart()
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchProduct = async () => {
            setLoading(true)
            const res = await fetch(`https://fakestoreapi.com/products/${id}`)
            const data = await res.json()
            setProduct(data)
            setLoading(false)
        }
        fetchProduct()
    },[id])

    const handleAddToCart = () => {
        addToCart(product)
       alert('Product added to cart:', product)
    }

if (loading) return <p>Loading...</p>
if (!product) return <p>Product not found</p>

  return (
    <div className="product-detail-main">
        <h2 className="product-detail-head">{product.title}</h2>
        <img src={product.image} alt={product.title} className="product-detail-image" />
        <p className="product-detail-description">{product.description}</p>
        <p className="product-detail-price">Price: ${product.price}</p>
        <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  )
}

export default ProductDetail