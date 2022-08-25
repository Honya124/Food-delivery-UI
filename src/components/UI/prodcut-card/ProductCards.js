import React from 'react'
import {Link} from 'react-router-dom'
import "../../../styles/productCards.css"
import {cartActions} from '../../../store/shopping-cart/cartSlice'
import {useDispatch} from 'react-redux'
function ProductCards(props) {
    const {id ,title , image01 , price , category, desc}=props.item
    const dispatch=useDispatch()

    const addToCart=()=>{
        dispatch(cartActions.addItem({
            id,
            title,
            image01,
            price
        }))
    }
  return (
      <div className='product'>
        <div className='product-container'>
                        <div className='product-card'>
                        <div className='sizing'>
                        <div className="image-card ">
                            <img src={image01} alt="broken" />
                        </div>
                        <div className='product-content'>
                            <h5>
                            <Link to={`/foods/${id}`}>{title}</Link>
                            </h5>
                           
                            <div className='product-pb '>
                            <span>${price}</span>
                                <button onClick={addToCart}>Add to Cart</button>
                            </div>
                            </div>
                        </div>
                        </div>
                
        </div>
      </div>
  )
}

export default ProductCards
