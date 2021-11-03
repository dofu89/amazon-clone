import React from 'react'
import '../styles/Home.css'
import Product from './Product'

const Home = () => {
  return (
    <div className='home'>
      <div className='home-container'>
        <img
          className='home-image'
          src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
          alt=''
        />
        <div className='home-row'>
          <Product
            id={0}
            title='The Lean Startup: How Today s Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses '
            price={19.99}
            rating={4}
            img='https://m.media-amazon.com/images/P/B004J4XGN6.01._SCLZZZZZZZ_SX500_.jpg'
          />
          <Product
            id={1}
            title='The Lean Startup: How Today s Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses '
            price={19.99}
            rating={2}
            img='https://m.media-amazon.com/images/P/B004J4XGN6.01._SCLZZZZZZZ_SX500_.jpg'
          />
        </div>
        <div className='home-row'>
          <Product
            id={2}
            title='The Lean Startup: How Today s Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses '
            price={19.99}
            rating={5}
            img='https://m.media-amazon.com/images/P/B004J4XGN6.01._SCLZZZZZZZ_SX500_.jpg'
          />
          <Product
            id={3}
            title='The Lean Startup: How Today s Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses '
            price={19.99}
            rating={2}
            img='https://m.media-amazon.com/images/P/B004J4XGN6.01._SCLZZZZZZZ_SX500_.jpg'
          />
          <Product
            id={4}
            title='The Lean Startup: How Today s Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses '
            price={19.99}
            rating={2}
            img='https://m.media-amazon.com/images/P/B004J4XGN6.01._SCLZZZZZZZ_SX500_.jpg'
          />
        </div>
        <div className='home-row'>
          <Product
            id={5}
            title='The Lean Startup: How Today s Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses '
            price={19.99}
            rating={3}
            img='https://m.media-amazon.com/images/P/B004J4XGN6.01._SCLZZZZZZZ_SX500_.jpg'
          />
        </div>
      </div>
    </div>
  )
}

export default Home
