import React, { useState, useEffect } from 'react'
import '../styles/Payment.css'
import { useStateValue } from '../state/StateProvider'
import { Link, useHistory } from 'react-router-dom'
import CheckoutProduct from '../components/CheckoutProduct'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import CurrencyFormat from 'react-currency-format'
import { getBasketTotalPrice } from '../state/reducer'
import { Button } from '@mui/material'
import axios from '../components/axios'

const Payment = () => {
  const [{ basket, user }] = useStateValue()
  const stripe = useStripe()
  const elements = useElements()
  const history = useHistory()

  const [processing, setProcessing] = useState('')
  const [succeeded, setSucceeded] = useState(false)
  const [error, setError] = useState(null)
  const [disabled, setDisabled] = useState(true)
  const [clientSecret, setClientSecret] = useState(true)

  useEffect(() => {
    //generate special stripe secret which allow us to charge  a customer

    const getClientSecret = async () => {
      //const response = await axios
      const response = await axios({
        method: 'post',
        //stripe expect the total in currencies subunits
        url: `/payments/create?total=${getBasketTotalPrice(basket) * 100}`,
      })
      setClientSecret(response.data.clientSecret)
      console.log(response.data.clientSecret)
    }

    getClientSecret()
  }, [basket])

  console.log('SECRET', clientSecret)

  const handleSubmit = async (e) => {
    //all stripe funcions
    e.preventDefault()
    setProcessing(true)

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        //paymentIntent = payment confirmation

        setSucceeded(true)
        setError(null)
        setProcessing(false)

        history.replace('/orders')
      })
  }

  const handleChange = (e) => {
    //listen for changes in the CardElements
    //and display all errors as the customer types their card details
    setDisabled(e.empty)
    setError(e.error ? e.error.message : '')
  }

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
            {basket.map((item, index) => (
              <CheckoutProduct
                key={index}
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
          <div className='payment-details'>
            {/*Build with stripes */}
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className='payment-price-container'>
                <CurrencyFormat
                  renderText={(value) => <h3>Order total: {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotalPrice(basket)}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'$'}
                />
                <Button
                  onClick={handleSubmit}
                  disabled={processing || disabled || succeeded}
                >
                  <span>{processing ? <p>Processing...</p> : 'Buy Now'}</span>
                </Button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment
