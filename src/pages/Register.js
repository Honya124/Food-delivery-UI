import React,{useRef} from 'react'
import {Link} from 'react-router-dom'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/common-section/CommonSection'
import '../styles/register.css'

function Register() {
  const signUpUsernameRef=useRef()
  const signUpPasswordRef=useRef()
  const signUpEmailRef=useRef()
  return (
    <div className="register" >
      <Helmet title="Register" />
      <CommonSection title="Register" />
    <div className="register-container">
    <div className='form-section'>
    <form  className='bg-form'>
         <div className='input-form'>
          <input type="text" placeholder='Name'
           ref={signUpUsernameRef}/>
         </div>
         <div className='input-form'>
          <input type="email" placeholder='Email'
          ref={signUpEmailRef} />
         </div>
         <div className='input-form'>
          <input type="password" placeholder='Password'
          ref={signUpPasswordRef} />
         </div>
         <div className='product-pb'>
          <button>Sign Up</button>
         </div>
         </form>
         <Link to="/register">already have an account? Login</Link>
         </div>
    </div>
    </div>
  )
}

export default Register
