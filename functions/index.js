const functions = require('firebase-functions')
const express = require('express')
const cors = require('cors')
const stripe = require('stripe')(
  'sk_test_51Js0yvDYQrnKxeezw486ok8bTIlg1CdIyXtbebOBJ09cVYzIVCAofpK9fasMsbePjXg5svkb9tlNx6uPtF2sXeEv00ImcmKv4d'
)

// API

// App config
const app = express()

// Middlewares
app.use(cors({ origin: true }))
app.use(express.json())

// API routes
app.get('/', (req, res) => {
  res.status(200).send('hello world')
})

app.post('/payments/create', async (req, res) => {
  const total = req.query.total

  console.log('Payment request recived Hello', total)

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //in subunits
    currency: 'usd',
  })

  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  })
})

// Listen command
exports.api = functions.https.onRequest(app)

//Example endpoint
// http://localhost:5001/clone-12003/us-central1/api
