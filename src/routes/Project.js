import React from 'react'
 
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Heroimage2 from '../components/Heroimage2';
import Pricingcard from '../components/Pricingcard';
import Work from '../components/Work';


const Project = () => {
  return (
    <div style={{color:'white'}}>
      <Navbar/>
      <Heroimage2 heading="PROJECTS." text="Some of
      my most recent works "/>
    <Work/>
      <Pricingcard/>
      <Footer/> 
    </div>
  );
};

export default Project;
