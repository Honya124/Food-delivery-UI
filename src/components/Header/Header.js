import React, {useRef, useEffect} from 'react'
import logo from '../../asstes/images/res-logo.png'
import {NavLink, Link} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {toggleActions} from '../../store/shopping-cart/cartUISlice'
import "../../styles/header.css"
function Header() {
const menuRef=useRef(null)
const headerRef=useRef(null)
const totalQuantity=useSelector((state)=>state.cart.totalQuantity)
const dispatch=useDispatch()
// const showCart=useSelector((state)=>state.cartVisible.cartIsVisivle)  
const toggleMenu=(()=>menuRef.current.classList.toggle("show-menu"))
const toggleCart=()=>{
dispatch(toggleActions.toggle())
}

useEffect(()=>{
     window.addEventListener('scroll', ()=>{
    if(document.body.scrollTop >80 || document.documentElement.scrollTop >80){
      headerRef.current.classList.add("header-shrink")
    }else{
      headerRef.current.classList.remove('header-shrink')
    }
  })
   // this is give me error
  // return ()=> window.removeEventListener('scroll')
},[])
  const link=[
    {
      display:"Home",
      path:"/home"
    },
    {
      display:"Foods",
      path:"/foods"
    },
    {
      display:"Cart",
      path:"/cart"
    },
    {
      display:"Contact",
      path:"/contact"
    },
  ]
  return (
    <div className='header' ref={headerRef}>
      <div className='container'>
      <div className='logo'>
     <img src={logo} alt="logo" />
      <h5>Tasty Treat</h5>
      </div>
      {/* nav menu */}
      <div className='navigation' ref={menuRef} onClick={toggleMenu}>
        <div className='menu'>
            {link.map((val,index)=>{
              return(
                <NavLink  key={index} 
                to={val.path}
                className={(navClass) =>
                  navClass.isActive ? "active-menu" : ""
                }
                >{val.display} </NavLink>
              )
            })}
        </div>
      </div>
  {/* nav right icons */}
      <div className='nav-right'>
          <span className='cart-icon' onClick={toggleCart}>
          <i class="ri-shopping-basket-line"></i>
          <span className='cart-badge'>{totalQuantity}</span>
          </span>

            <span className='user '>
              <Link to='/login'>
              <i class="ri-user-line"></i>
              </Link>
            </span>

            
            <span className='mobile-menu'  onClick={toggleMenu}>
              <i class="ri-menu-line"></i>
            </span>
      </div>

      
      </div>
     
    </div>
  )
}

export default Header
