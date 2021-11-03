import React from 'react'
import { useStateValue } from '../state/StateProvider'
import '../styles/Product.css'

const Product = ({ id, title, price, rating, img }) => {
  const [state, dispatch] = useStateValue()

  const addToBasket = () => {
    //dispatch action - the item into data layer
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        img: img,
        price: price,
        rating: rating,
      },
    })
  }
  return (
    <div className='product'>
      <div className='product-info'>
        <p>{title}</p>
        <p className='product-price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='product-rating'>
          {Array(rating)
            .fill()
            .map(() => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={img} alt='' />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  )
}

export default Product
