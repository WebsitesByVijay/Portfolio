import "./ProjectCardStyles.css"

import React from 'react'
import { NavLink } from "react-router-dom"

const ProjectCard = (props) => {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="Outfitters.com" />
      <h1 className="project-title"> {props.title} </h1>
      <div className="project-details">
        <p>{props.text}</p>
      </div>
      <div className="project-btns">
        <NavLink to={props.source} className="btn">
          Source
        </NavLink>
      </div>
    </div>
  );
}

export default ProjectCard