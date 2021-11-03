import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import '../styles/Login.css'
import { auth } from '../firebase'

const Login = () => {
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const signIn = (e) => {
    e.preventDefault()
    //firebase login
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push('/')
      })
      .catch((err) => console.log(err))
  }
  const register = (e) => {
    e.preventDefault()
    //firebase register
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push('/')
        }
      })
      .catch((err) => console.log(err))
  }

  return (
    <div className='login'>
      <Link to='/'>
        <img
          className='login-logo'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2000px-Amazon_logo.svg.png'
          alt=''
        />
      </Link>
      <div className='login-container'>
        <h1>Sing In</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={signIn}
            type='submit'
            className='login-signin-button'
          >
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to Amazon's Conditions of Use & Sale. Please
          see our Privacy Notice, our Cookies Notice and our Interest-Based Ads
          Notice.
        </p>
        <button onClick={register} className='login-register-button'>
          Create your Amazon account
        </button>
      </div>
    </div>
  )
}

export default Login
