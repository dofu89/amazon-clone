import React from 'react'
import '../styles/Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../state/StateProvider'
import { getBasketTotalPrice } from '../state/reducer'
import { useHistory } from 'react-router'
import { Button } from '@mui/material'

const Subtotal = () => {
  const history = useHistory()
  const [{ basket }] = useStateValue()

  let sum = getBasketTotalPrice(basket)
  console.log(sum)
  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className='subtotal-gift'>
              <input type='checkbox' /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotalPrice(basket)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />
      <Button onClick={(e) => history.push('/payment')}>
        Proceed to Checkout
      </Button>
    </div>
  )
}

export default Subtotal
