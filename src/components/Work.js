
 import "./WorkCardstyles.css";
 import WorkCard from "./WorkCard";
 import WorkCardData from "./WorkCardData";
 import React from "react";
 
 const Work =()=>{
    return <div className="work-container"> 
     <h1 className="project-heading"> Project</h1>
     <div className="project-contianer">
      {WorkCardData.map((val,ind) =>{
        return(
            <WorkCard
             key={ind}
             imgsrc={val.imgsrc}
             title={val.title}
             text={val.text}
             view={val.view}
            />
            
        );
      })}
    </div>
    </div>
 };
 export default Work;

 
