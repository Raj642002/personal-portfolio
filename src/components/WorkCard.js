
 import "./WorkCardstyles.css";
 
 import React from "react";
 
import { NavLink } from "react-router-dom";
 const WorkCard =(props)=>{
      //  <div className="work-container"> 
    // <h1 className="project-heading"> Project</h1>
     //<div className="project-contianer">
     return(
      <div className="project-card">
         <img src={props.imgsrc} alt="props.title"/>
         <h2 className="project-title"> {props.title}</h2>
         <div className="pro-details">
         <p>{props.text}</p>
         <div className="pro-btns">
            <NavLink to={props.view}className="btn"> View</NavLink>
            <NavLink to="url.com" className="btn">Source</NavLink>
         </div>
      </div>
     </div>
    //</div>
    //</div>
     ); 
 };
 export default WorkCard;

 
