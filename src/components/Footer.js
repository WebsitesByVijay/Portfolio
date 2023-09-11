import "./FooterStyles.css"

import React from 'react'

import { FaHome, FaPhone, FaMailBulk, FaFacebook ,FaTwitter, FaLinkedin } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer-container">
        <h1>Contact Info</h1>
        <div className="Container">
          <h4>
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            Banglore,Karnataka
          </h4>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              +91 7353411050
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              vijaypatil0516@gmail.com
            </h4>
          </div>
          
          <FaFacebook
            size={20}
            style={{ color: "#fff", marginRight: "1rem" }}
          />
          <FaTwitter size={20} style={{ color: "#fff", marginRight: "1rem" }} />
          <FaLinkedin
            size={20}
            style={{ color: "#fff", marginRight: "1rem" }}
          />
        </div>

        <div className="Container2"></div>
      </div>
    </div>
  );
}

export default Footer