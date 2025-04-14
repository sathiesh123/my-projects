import { FaHome,FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa"
import "./FooterStyles.css"
import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
            <div className="location">
                <FaHome size={20} style={{color:"#fff",
                    marginRight:"2rem"
                }}/>
                <div>
                    <p>123 Housing Society.</p>
                    <p>Bangladesh.</p>
                </div>
            </div>
            <div className="phone">
                <h4><FaPhone size={20} style={{color:"#fff",marginRight:"2rem"
                }}/>
                +91 8-778-842-336</h4>

            </div>
            <div className="email">
                <h4><FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"
                }}/>
                dhiesh06@gmail.com
                </h4>

            </div>
        </div>

        <div className="right">
            <h4>About the company</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam accusantium fugit tenetur magni, repellendus in?</p>
            <div className="social">
            <FaFacebook size={20} style={{color:"#fff", marginRight:"2rem"
                }}/>
                <FaTwitter size={20} style={{color:"#fff", marginRight:"2rem"
                }}/>
                <FaLinkedin size={20} style={{color:"#fff", marginRight:"2rem"
                }}/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
