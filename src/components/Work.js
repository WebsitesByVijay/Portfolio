import "./ProjectCardStyles.css";
import ProjectCard from "./ProjectCard";
import ProjectCardData from "./workCardData";

import React from "react";


const work = () => {
  return (
    <div className="project-container">
      <h1 className="project-heading">Projects.</h1>
      <div className="work-container">
     {
        ProjectCardData.map((val,ind) => {
            return (
                <ProjectCard 
                key = {ind}
                imgsrc = {val.imgsrc}
                title = {val.title}
                text = {val.text}
                source = {val.source}
                />
            )
        })
     }
      </div>
    </div>
  );
};

export default work;
