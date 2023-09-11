import "./HomeBg1Styles.css";

import React from 'react'

import IntroImg from "../assests/intro-bg.jpg"
import { Link } from "react-router-dom";

const HomeBg1 = () => {
  return (
    <div className="Home-bg">
      <div className="image">
        <img className="intro-Img" src={IntroImg} alt="IntroImg" />
        <div className="content">
          <p> Hello I'm Vijay, </p>
          <h1>I'm A Full Stack Java Developer.</h1>
          <Link to="/project" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomeBg1