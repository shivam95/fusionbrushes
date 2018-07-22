
import React from 'react';
import './footer.css'
import {FaTwitter, FaGooglePlus, FaFacebook} from 'react-icons/lib/fa'
const footer = function () {
    return (
        <footer id="myFooter">
        <div className="container">
          <ul>
            <li>
              <a href="#">Company Information</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
            <li>
              <a href="#">Reviews</a>
            </li>
            <li>
              <a href="#">Terms of service</a>
            </li>
          </ul>
          <p className="footer-copyright">© 2016 Copyright Text</p>
        </div>
        <div className="footer-social">
          <a href="#" className="social-icons">
           <FaFacebook className="fa fb"/>
          </a>
          <a href="#" className="social-icons">
            <FaGooglePlus className="fa gp"/>
          </a>
          <a href="#" className="social-icons">
            <FaTwitter className="fa tw"/>
          </a>
        </div>
      </footer>
    )
}

export default footer;