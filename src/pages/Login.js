import React, { useRef } from 'react'
import {Link} from 'react-router-dom'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/common-section/CommonSection'
import '../styles/login.css'

function Login() {
  const usernameRef=useRef() 
  const passwordRef=useRef()
  return (
    <div className="login" >
      <Helmet title="Login" />
      <CommonSection title="Login" />
    <div className="login-container">
    <div className='form-section'>
    <form  className='bg-form'>
         <div className='input-form'>
          <input type="text" placeholder='Name'
           ref={usernameRef}/>
         </div>
         <div className='input-form'>
          <input type="passworf" placeholder='Password'
          ref={passwordRef} />
         </div>
         <div className='product-pb'>
          <button>Login</button>
         </div>
         </form>
         <Link to="/register">don't have an account? register</Link>
         </div>
    </div>
    </div>
  )
}

export default Login
