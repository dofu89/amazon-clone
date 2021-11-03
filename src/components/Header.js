import React from 'react'
import '../styles/Header.css'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'
import { Link } from 'react-router-dom'
import { useStateValue } from '../state/StateProvider'
import { auth } from '../firebase'

const Header = () => {
  const [{ basket, user }] = useStateValue()
  const handleLogin = () => {
    auth.signOut()
  }
  return (
    <div className='header'>
      <Link to='/'>
        <img
          src='https://snipstock.com/assets/cdn/png/3b87a86d107d21733d3fc33443aa0e40.png'
          alt=''
          className='header-logo'
        />
      </Link>

      <div className='header-search'>
        <input type='text' className='header-search-input' />
        <SearchIcon className='header-search-icon' />
      </div>
      <div className='header-nav'>
        <Link to={!user && '/login'}>
          <div onClick={handleLogin} className='header-option'>
            <span className='header-option-line-one'>
              Hello {user ? user.email : 'Guest'}
            </span>
            <span className='header-option-line-two'>
              {user ? 'Sing Out' : 'Sing In'}
            </span>
          </div>
        </Link>
        <div className='header-option'>
          <span className='header-option-line-one'>Returns</span>
          <span className='header-option-line-two'>& Orders</span>
        </div>
        <div className='header-option'>
          <span className='header-option-line-one'>Your</span>
          <span className='header-option-line-two'>Prime</span>
        </div>
        <Link to='/checkout'>
          <div className='header-option-basket'>
            <ShoppingBasketIcon />
            <span className='header-option-line-two header-basket-count'>
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Header
