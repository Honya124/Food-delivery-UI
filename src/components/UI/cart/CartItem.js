import React from 'react'
import '../../../styles/cartItem.css'
import {useDispatch} from 'react-redux'
import {cartActions} from '../../../store/shopping-cart/cartSlice'

function CartItem({item}) {
  const {id ,image01, price , title, quantity, totalPrice}=item
  const dispatch=useDispatch()

  const increment=()=>{
  dispatch(cartActions.addItem({
    id,
    image01,
    title,
    price
  }))
  }
  const decrement=()=>{
    dispatch(cartActions.removeItem(id))
  }

  const deleteCart=()=>{
    dispatch(cartActions.deleteItem(id))
  }

  return (
    <div className='cart-item '>
    <div key={id} className='cart-item-container'>
            <img src={image01} alt="select-foods" className='image-select' />
        <div className='info-content'>
  <div className='about-content'>
    <h6 className='title-select'>{title}</h6>
    <p className='price-content'>{quantity}x <span>${totalPrice}</span></p>
    <div className='inc-dec-item'>
        <span onClick={increment}>
          <i class="ri-add-fill"></i></span>
        <span>{quantity}</span>
        <span  onClick={decrement}>
          <i class="ri-subtract-line"></i></span>
    </div>
  </div>
  <span onClick={deleteCart}
  ><i class="ri-close-fill"></i></span>
        </div>
    </div>
    </div>
  )
}

export default CartItem
