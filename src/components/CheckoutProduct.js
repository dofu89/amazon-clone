import React from 'react'
import { useStateValue } from '../state/StateProvider'
import '../styles/CheckoutProduct.css'
import { Button } from '@mui/material'

const CheckoutProduct = ({ id, img, title, price, rating }) => {
  const [{ basket }, dispatch] = useStateValue()

  const removeFromBasket = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id,
    })
  }
  return (
    <div className='checkout-product'>
      <img className='checkout-product-img' src={img} alt='' />
      <div className='checkout-product-info'>
        <p className='checkout-product-title'>{title}</p>
        <p className='checkout-product-price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <p className='checkout-product-rating'>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </p>
        <Button onClick={removeFromBasket}>Remove from Basket</Button>
      </div>
    </div>
  )
}

export default CheckoutProduct
