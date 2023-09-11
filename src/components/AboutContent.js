import "./AboutContentStyles.css"
import javaImg from "../assests/javaImg.jpg"
import Image2 from "../assests/Spring&React.jpg"

import React from 'react'

import { Link } from "react-router-dom";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="container1">
        <h1>Who am I?</h1>
        <p>
          I'm a Java Full Stack Developer, I create Responsive Frontend and
          Secure Backend Applications Using Java.
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="container2">
        <div className="image-container">
          <div className="img-stack top">
            <img src={javaImg} alt="Java Img" className="img" />
          </div>
          <div className=" img-stack bottom">
            <img src={Image2} alt="Spring&React Img" className="img"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutContent