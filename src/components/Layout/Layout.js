import React from 'react'
import Header from  '../Header/Header'
import Footer from '../Footer/Footer'
import Routes from "../../routes/Routers"
import Carts from '../UI/cart/Carts'
import {useSelector} from 'react-redux'
function Layout() {
  const showCart=useSelector((state)=>state.cartUI.cartIsVisivle)
  return (
    <div>
      <Header />
    {showCart &&  <Carts />
    }
      <Routes />
      <Footer />
    </div>
  )
}

export default Layout
