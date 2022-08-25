import React from 'react'
import CartItem from '../cart/CartItem'
import {Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {toggleActions} from '../../../store/shopping-cart/cartUISlice'
import '../../../styles/cart-shopping.css'

function Carts() {
  const dispatch=useDispatch()
   const cartData=useSelector((state)=>state.cart.cartItem)
   const totalAmount=useSelector((state) => state.cart.totalAmount) 

   const toggleCart =()=>{
    dispatch(toggleActions.toggle())
   }
  return (
    <div className='carts'>
      <div className='carts-container'>
        <div className='close-cart' onClick={toggleCart} >
        <span className='close'><i class="ri-close-fill"></i></span>
        </div>
        <div className='cart-product'>
          {
          cartData.length === 0 ?  <h6>"No item added to the cart"</h6>:
          cartData.map((item,index)=>(
            <CartItem item={item} key={index} />

            )
          
          )}
          
        </div>
        <div className='price-amount'>
            <h6>Subtotal: <span>${totalAmount}</span></h6>
            <button><Link to='checkout'>Checkout</Link></button>
        </div>
      </div>
    </div>
  )
}

export default Carts
