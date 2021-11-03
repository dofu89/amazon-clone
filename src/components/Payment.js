import React from 'react'
import '../styles/Payment.css'
import { useStateValue } from '../state/StateProvider'
import { Link } from 'react-router-dom'
import CheckoutProduct from '../components/CheckoutProduct'

const Payment = () => {
  const [{ basket, user }] = useStateValue()
  return (
    <div className='payment'>
      <div className='payment-container'>
        <h1>
          Checkout <Link to='/checkout'>{basket.length} items</Link>
        </h1>
        <div className='payment-section'>
          <div className='payment-title'>
            <h3>Delivery Adress</h3>
          </div>
          <div className='payment-adress'>
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>Sarajevo, Zagrebacka 15</p>
          </div>
        </div>
        <div className='payment-section'>
          <div className='payment-title'>
            <h3>Review items and delivery</h3>
          </div>
          <div className='payment-items'>
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
        <div className='payment-section'>
          <div className='payment-title'>
            <h3>Payment Method</h3>
          </div>
          <div className='payment-details'>{/*Build with */}</div>
        </div>
      </div>
    </div>
  )
}

export default Payment
