import React, {useState, useEffect} from 'react'
import Helmet from '../components/Helmet/Helmet'
import Hero from '../asstes/images/hero.png'
import {Link} from 'react-router-dom'
import "../styles/hero-section.css"
import "../styles/home.css"

import feautureImage1 from '../asstes/images/service-01.png'
import feautureImage2 from '../asstes/images/service-02.png'
import feautureImage3 from '../asstes/images/service-03.png'

import categoryImage1 from "../asstes/images/pizza.png"
import categoryImage2 from "../asstes/images/hamburger.png"
import categoryImage3 from "../asstes/images/bread.png"

// from category page
import Category from '../components/UI/category/Category'

// from fake product
import Products from '../asstes/fake-data/products'
// from productcards
import ProductCards from '../components/UI/prodcut-card/ProductCards'

import locationImage from '../asstes/images/location.png'
import Network from '../asstes/images/network.png'
import TestimonialSlider from '../components/UI/slider/TestimonialSlider'

const futureData=[
  {
    title:"Quick Delivery",
    url:feautureImage1,
    desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
  },
  {
    title:"Super Dine In",
    url:feautureImage2,
    desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
  },
  {
    title:"Easy Pick Up",
    url:feautureImage3,
    desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
  }
]

function Home() {
  const [category, setCategory]=useState('ALL')
  const [allProduct , setAllProduct]=useState(Products)
  const [hotPizza, setHotPizza]=useState([])
 
  useEffect(()=>{
  const fillterdPizza=Products.filter((item)=>item.category==="Pizza")
  const slicePizza=fillterdPizza.slice(0,4)
  setHotPizza(slicePizza)
  },[])
  useEffect(()=>{ 
    if(category==="All"){
      setAllProduct(Products)
    }
    if(category === "Burger"){
      const getProduct=Products.filter((item)=> item.category==="Burger")
      setAllProduct(getProduct)
    }

    if(category==="Pizza"){
      const getProduct=Products.filter((item)=>item.category==="Pizza")
      setAllProduct(getProduct)

    }

    if(category==="Bread"){
      const getProduct=Products.filter((item)=>item.category==="Bread")
      setAllProduct(getProduct)

    }
  },[category])
  return (
    <div className='home'>
      <Helmet title="Home" />
      <div className='home-container'>
        <div className='left-side'>
          <div className='text-content'>
            <p className='para-1'>Easy way to make an order</p>
            <h5><span>HUNGRY? </span>just wait <br /> food at <span>your door</span></h5>
            <p className='para-2'>Lorem ipsum dolor sit amet 
            consectetur adipisicing elit. Ipsam non aspernatur
             adipisci delectus, dicta sequi ab maxime autem aut?</p>
          </div>

          <div className='btn-section'>
              <button>Order now
              <i class="ri-arrow-right-s-line"></i>
              </button>
                <Link className='btn-link'
                to="/foods"><span>See all foods</span> </Link>
          </div>

          <div className='text-decoreation'>
            <p>
            <i class="ri-car-line"></i>
              No shipping charge
            </p>

            <p><i class="ri-shield-check-line"></i>
            100% secure checkout
            </p>
          </div>
        </div>

        <div className='right-side'>
          <img src={Hero} alt="hero-img" />
        </div>
      </div>
      <div >
        <div>
          <div className='category-image-card'>
            <Category />
          </div>
        </div>
        
        <div className='serving'>
        <h5>What we serve</h5>
        <h2>Just sit back at home <br /> we will <span>take care</span></h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nihil distinctio quos?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nihil distinctio quos</p>
      </div>
      <div className='future-products'>
        {futureData.map((item,index)=>{
          return(
            <div key={index} >
             <div className='feature-img'>
              <img src={item.url} alt="broken" />
             </div>
               <h5>{item.title}</h5>
               <p>{item.desc}</p>
            </div>
          )
        })}
      </div>

      <div className='poplarFoods'>
        <h2>Popular Foods</h2>
        <div className='category-image'>
        <button className='activecolor' onClick={()=>setCategory('All')} >All</button>
        
        <button onClick={()=>setCategory("Burger")} className={`${category==='Burger'? 'activecolor':'' }`}>
        <img src={categoryImage2 } alt="broken"  />Burger
        </button>
       
        <button onClick={()=>setCategory('Pizza')} className={`${category==='Pizza'?'activecolor':''}`}>
        <img src={categoryImage1} alt="broken" />Pizza
        </button>
        <button onClick={()=>setCategory('Bread')} className={`${category==='Bread'?'activecolor':''}`}>
        <img src={categoryImage3} alt="broken" />Bread
        </button>

        </div>
      </div>
           <div className='product-item'> 
           {allProduct.map((val)=>{
            return(
              <div key={val.id} className="food-product">
              <ProductCards item={val} />
            </div>
            )
           
         })}
           </div>

           <div className='location-table'>
            <div className='left-img-location'>
              <img src={locationImage} alt="broken" />
            </div>

            <div className='right-location'>
              <div className='right-title'>
                <h5>Why <span>Tasty Treat?</span></h5>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                   Reiciendis amet deserunt illo nostrum modi, eius voluptatem 
                   officiis dolor doloremque fugiat? Consectetur, iure ut explicabo 
                  aspernatur atque dolorum laboriosam voluptatum necessitatibus.</p>
              </div>

              <div className='right-choose-us'>
                <div className='right-choose-us-1'>
                <p className='choose-us-title'><i class="ri-checkbox-circle-line"></i>Fresh and tasty foods</p>
                <p className='choose-us-desc'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, placeat!</p>
                </div>
                <div className='right-choose-us-2'>
                <p className='choose-us-title'><i class="ri-checkbox-circle-line"></i>Quality support</p>
                <p className='choose-us-desc'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, placeat!</p>
                </div>
                <div className='right-choose-us-3' >
                <p className='choose-us-title'><i class="ri-checkbox-circle-line"></i>Order from any location</p>
                <p className='choose-us-desc'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, placeat!</p>
                </div> 
              </div>
            </div>
           </div>

           <div className='hot-pizza'>
                <h5>Hot Pizza</h5>
                <div className='product-item'>
                   {
                    hotPizza.map((item)=>(
                    <div key={item.id} >
                      <ProductCards item={item} />
                    </div>
                    ))
                   }
                </div>
              </div>

              <div className='network-table'>
                <div className='network-left-side'>
                  <h5>Testimonial</h5>
                  <h2 className='network-title'>What our <span>customers</span> are saying</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Quaerat aliquid quod quam illo, officiis soluta. Quis, ad.</p>
                    <div className='testimonial-slider'>
                        <TestimonialSlider />
                    </div>
                </div>
                <div className='network-img-rightside'>
                 <img src={Network} alt="network-img"/>
                </div>
              </div>
        </div>
    </div>
  )
}

export default Home
