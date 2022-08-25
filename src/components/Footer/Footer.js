import React from 'react'
import logo from '../../asstes/images/res-logo.png'
import {Link} from 'react-router-dom'
import "../../styles/footer.css"

function Footer() {
  return (
    <div className='footer'>
     <div className='container-footer'>
      <div className='table-grid'>
      <div className=' footer-logo'  >
     <img src={logo} alt="logo" />
      <h5>Tasty Treat</h5>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, minus</p>
      </div>
      <div className='delivary-table'>
        <h5>Delivery Time</h5>
        <div className='time-work'>
          <span>Sunday - Thursday</span>
          <p>10:00am - 11:00pm</p>
        </div>
        <div className='time-off'>
          <span>Friday - Saturday</span>
          <p>Off day</p>
        </div>
      </div>

      <div className='contact-table'>
          <h5>Contact</h5>
          <p>Location: Sulaymaniah, sarshaqam</p>
          <div className='my-accout'>
          <span>Phone: 07707939300</span>
            <span>Email: admin@gmail.com</span>
          </div>
      </div>

      <div className='input-table'>
   <h5>Newsletter</h5>
   <p>Subscribe our newsletter</p>
   <div className='subs-email'>
    <input type="email" placeholder='Enter your email' />
    <span><i class="ri-send-plane-line"></i></span>
   </div>
      </div>

      </div>
      <div className='my-accout-table'>
        <p className='copyright'>Copyright - 2022 website made by Honya124. All Rights Reserved.</p>
        <div className='social-account'>
          <p>Follow: </p>
          <span><Link to='https://www.facebook.com/honya.awat.940/'><i class="ri-facebook-line"></i></Link></span>
          <span><Link to='https://github.com/Honya124'><i class="ri-github-line"></i></Link></span>
          <span><Link to='https://www.youtube.com/channel/UCfWv86uk8oVQUc7R-JdOZRA'><i class="ri-youtube-line"></i></Link></span>

        </div>
      </div>
     </div>
      
    </div>
  )
}

export default Footer
