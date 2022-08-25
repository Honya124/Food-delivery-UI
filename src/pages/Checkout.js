import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/common-section/CommonSection'
import '../styles/checkout.css'
function Checkout() {
  const cartTotalAmount=useSelector((state)=>state.cart.totalAmount)
  const costShipping=30;
  const totalAmount=cartTotalAmount + costShipping;

  const [enterName, setEnterName]=useState('')
  const [enterEmail, setEnterEmail]=useState('')
  const [enterPhone, setEnterPhone]=useState('')
  const [enterCity, setEnterCity]=useState('')
  const [enterCountry, setEnterCountry]=useState('')
  const [enterPostalCode, setEnterPostalCode]=useState('')
  const shippingInfo=[]
  // const [shippingInfo , setShippingInfo]=useState([])



  const submitHandler=(e)=>{
    e.preventDefault();
    const checkoutData={
      name:enterName,
      email:enterEmail,
      phone:enterPhone,
      city:enterCity,
      country:enterCountry,
      postalCard:enterPostalCode
    }
    shippingInfo.push(checkoutData)
    console.log(shippingInfo)

  }
  return (
    <div className='checkout-section'>
      <Helmet title="checout" />
      <CommonSection  title="Checkout"/> 
     <div className='checkout-container'>
      <div className='form-section'>
        <h6 className="title-checkout">Shipping Address</h6>
        <form onSubmit={submitHandler}>
         <div className='input-form'>
          <input type="text" placeholder='Name'
           onChange={(e)=>setEnterName(e.target.value)} />
         </div>
         <div className='input-form'>
          <input type="email" placeholder='Email'
          onChange={(e)=>setEnterEmail(e.target.value)} />
         </div>
         <div className='input-form'>
          <input type="number" placeholder='Phone Number' 
          onChange={(e)=>setEnterPhone(e.target.value)}/>
         </div>
         <div className='input-form'>
          <input type="text" placeholder='Country'
          onChange={(e)=>setEnterCountry(e.target.value)} />
         </div>
         <div className='input-form'>
          <input type="text" placeholder='City' 
          onChange={(e)=>setEnterCity(e.target.value)}/>
         </div>
         <div className='input-form'>
          <input type="number" placeholder='Postal Code' 
          onChange={(e)=>setEnterPostalCode(e.target.value)}/>
         </div>
         <div className='product-pb'>
         <button >Payment</button>
         </div>
        </form>
      </div>

      <div className="price-section">
        <h6>Subtotal:<span>${cartTotalAmount}</span></h6>
        <h6>Shipping:<span>${costShipping}</span></h6>
        <div className="total-section">
          <h5>Total:<span>${totalAmount}</span></h5>
        </div>
      </div>
     </div>
    </div>
  )
}

export default Checkout
