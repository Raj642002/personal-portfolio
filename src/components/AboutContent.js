import "./AboutContentStyles.css";
import {Link} from "react-router-dom";
import React from 'react'
import React1 from "../assets/about1.jpg";
import React2 from "../assets/about2.jpeg";
const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I</h1>
            <p>
                IM a react front-end Developer.
                responsive secure Websites for 
                my clients.
            </p>
            <Link to="/contact">
            <button className="btn">contact</button>
            </Link>
        </div>
       <div className="right">
        <div className="img-container">
            <div className="img-stack top">
              <img src={React1} className="img" alt="true"/>  
            </div>
            <div className="img-stack bottom">
              <img src={React2} className="img" alt="true"/>  
            </div>
        </div>
       </div>
    </div>
  );
};

export default AboutContent;
