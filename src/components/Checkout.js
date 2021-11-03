import React from 'react'
import '../styles/Checkout.css'
import Subtotal from '../components/Subtotal'
import { useStateValue } from '../state/StateProvider'
import CheckoutProduct from './CheckoutProduct'

const Checkout = () => {
  const [{ basket, user }] = useStateValue()
  return (
    <div className='checkout'>
      <div className='checkout-left'>
        <img
          className='checkout-ad'
          src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
          alt=''
        ></img>
        <div>
          <h3 className='checkout-user'>
            Hello, {user ? user?.email : 'Guest'}
          </h3>
          <h2 className='checkout-title'>Your shopping Basket</h2>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              img={item.img}
              title={item.title}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className='checkout-right'>
        <Subtotal />
      </div>
    </div>
  )
}

export default Checkout
