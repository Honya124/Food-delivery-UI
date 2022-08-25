import React from 'react'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/common-section/CommonSection'
import {useSelector , useDispatch}from 'react-redux'
import { cartActions } from '../store/shopping-cart/cartSlice'
import {Link} from 'react-router-dom'
import '../styles/cart.css'
function Cart() {
  const dispatch=useDispatch()
  const cartItem=useSelector((state=> state.cart.cartItem))
  const totalAmount=useSelector((state)=>state.cart.totalAmount)
   

  
  const Tr=(props)=>{
    const { id,image01 , title , price , quantity}=props.item
    
    const deleteCard=()=>{
      dispatch(cartActions.deleteItem(id))
    }

    return(
      <tr >
      <td className='image-box'>
        <img src={image01} alt="food cart"  className='foodCart'/></td>
      <td>{title}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td className='foodDelete' onClick={deleteCard}>
        <i class="ri-delete-bin-7-line"></i></td>
    </tr>
    )
  }
  return (
    <div className='cart'>
      <Helmet title="Your cart" />
      <CommonSection title="Your Cart" />
       <div className='cart-container'>
     {cartItem.length === 0 ? (<h4>No Cart here yet.</h4>):(
            <table>
                    <thead >
                       <tr >
                        <th >Image</th>
                        <th >Product Title</th>
                        <th >Price</th>
                        <th >Quantity</th>
                        <th >Delete</th>
                       </tr>
                     </thead>

                     <tbody >
                    {cartItem.map((item)=>(
                      <Tr item={item} />
                    ))}
                     </tbody>
                        </table> 
     )} 
     <div className='proceed-continue'>
      <h6>Subtotal: $<span className='total-amount'>
        {totalAmount}</span></h6>
        <p>Taxes and shipping will calculate at checkout</p>
        <div className='btn-section'>
          <button><Link to="/foods">Continue shopping</Link></button>
          <button><Link to="/checkout">Proceed to checkout</Link></button>
        </div>
     </div>
       </div>
    </div>
  )
}

export default Cart
