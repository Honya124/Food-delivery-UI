import React,{useState,useEffect} from 'react'
import CommonSection from '../components/UI/common-section/CommonSection'
import { useParams } from 'react-router-dom'
import Products from '../asstes/fake-data/products'
import ProductCard from '../components/UI/prodcut-card/ProductCards'
import {cartActions} from '../store/shopping-cart/cartSlice'
import { useDispatch } from 'react-redux'
import '../styles/foodDetails.css'


function FoodDetails() {
  const dispatch=useDispatch()
  const {id}=useParams()
  const [tab, setTab]=useState('desc')
const product=Products.find((data)=>data.id === id)
const [previewImage , setPreviewImage]=useState(product.image01)
const [enteredName, setEnteredName]=useState('');
const [enteredEmail , setEnteredEmail]=useState('');
const [reviewMsg , setReviewMsg]=useState('')
const {title , price, category,desc,image01}=product
const relatedProduct=Products.filter((item)=>item.category === category)
const submitHandler=e=>{
e.preventDefault()
}
const addItem=()=>{
  dispatch(cartActions.addItem({
    id,
    title,
    image01,
    price
  }))
}
// ama bo waya ka agar click't krd lasar pic bchetawa bashu image detail
useEffect(()=>{
  setPreviewImage(product.image01)
},[product])

// ama katek achita page ka product'akany tyaya acheta begin
useEffect(()=>{
  window.scrollTo(0,0)
},[product])

  return (
    <div className='foodDetails'>
      <CommonSection title={title} />
      <div className='food-details-container'>
        <div className='image-product '>
          <div className='image-extra'>
             <img src={product.image01} 
             onClick={()=>setPreviewImage(product.image01)}
              alt="imag01-broken" />
             <img src={product.image02} 
             onClick={ ()=>setPreviewImage(product.image02)}
             alt="image02-broken" />
             <img src={product.image03} 
             onClick={()=>setPreviewImage(product.image03)}
              alt="image03-broken" />
          </div>
          <div className='main-image'>
             <img src={previewImage} alt="" />
          </div>
          <div className='item-product'>
              <h2>{title}</h2>
              <p className='pricePara'>price:<span className='price'>${price}</span></p>
              <p className='categoryPara'>category:<span>{category}</span></p>
               
               <div className='product-pb'>
                <button onClick={addItem}
                >Add to Cart</button>
               </div>
          </div>
          </div>
       {/* second row */}
       <div className='review-text'>
        <div className='text-desc'>
          <h6 onClick={()=>setTab('desc')}
          className={`${tab==='desc'?'red-active':''} `}>
            Description</h6>
          <h6  onClick={()=>setTab('rev')}
           className={`${tab==='rev' ?'red-active':''} `}>
            Review</h6>
          </div>
          {tab==='desc'? (
            <div>
                  <div className='text-content'>
                 <p>{desc}</p>
                 </div>
              <div className='related-product'>
                <h2 className='related-product-title'>You might also like</h2>
                <div className='product-item'>
                {relatedProduct.map((item)=>(
                  <ProductCard item={item} key={item.id} />
                ))}
                </div>
                   </div>
            </div>
               
          ):(
            <div className='tab-form'>
            <div className='review'>
              <p>Honya Awat</p>
              <p>admin@gmail.com</p>
              <p>great product</p>
            </div>
            <div className='review'>
              <p>Honya Awat</p>
              <p>admin@gmail.com</p>
              <p>great product</p>
            </div>
            <div className='review'>
              <p>Honya Awat</p>
              <p>admin@gmail.com</p>
              <p>great product</p>
            </div>
          <form className='bg-form' onSubmit={submitHandler}>
            <div className='input-form'>
              <input type="text"
               placeholder='Write your Name'
               onChange={(e)=> setEnteredName(e.target.value)} required />
            </div>
            <div className='input-form'>
              <input type="text" 
              placeholder='Write your Email'
              onChange={(e)=> setEnteredEmail(e.target.value)} required />
            </div>
            <div className='input-form'>
              <textarea type="text" rows={5} 
              placeholder='Write your review'
              onChange={(e)=> setReviewMsg(e.target.value)} required />
            </div>
            <div className='product-pb'>
            <button>Submit</button>
            </div>
          </form>
         </div>
          )}
       </div>
      </div>
      </div>
  )
}

export default FoodDetails
