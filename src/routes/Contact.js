import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Heroimage2 from '../components/Heroimage2';
import Form from '../components/form'; 
const Contact = () => {
  return (
    <div style={{color:'white'}}>
     <Navbar/>
     <Heroimage2 heading="CONTACT." text="Lets have a chat"/>
     <Form/>
     <Footer/>
    </div>
  )
}

export default Contact
