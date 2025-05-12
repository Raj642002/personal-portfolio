import React from 'react'
import "./Footerstyles.css"
import {FaHome,FaPhone, FaMailBulk, FaFacebook,FaLinkedin} from 'react-icons/fa'

const Footer = () => {
  return (
    <div>
      <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
            <div className='location'>
             <FaHome size={20} style={{color:"#fff",marginRight:'2rem'}} />
             <div>
                <p>vishnu nagar ,ara,bhojpur</p>
                <p>bihar INDIA</p>
             </div>
        </div>
        <div className='phone'>
            <h4><FaPhone size={20} style={{color:'#fff', marginRight:'2rem'}}/> 
             91+ 8789548482</h4>
        </div>
        <div className='email'>
            <h4><FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}} />
             ravishkumar11391@gmail.com
            </h4>
        </div>
      </div>
      <div className='right'>
        <h4>Introduction</h4>
        <p> This is ravish kumar .
            currently purshing MCA from
            GRAPHIC ERA DEEMED TO BE UNIVERSITY 
             </p>
             <div className='social'>
               <FaFacebook 
                 size={30} style={{color:"#fff",marginRight:'1rem'}} />
                 <FaLinkedin size={30} style={{color:"#fff",marginRight:'1rem'}} />

               
            
             </div>
      </div>
    </div>
    </div>
    </div>
    
  )
}

export default Footer
