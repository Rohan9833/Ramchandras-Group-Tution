import "./Fotter.css"
import React from 'react';

import { Link } from 'react-router-dom';


const Fotter = () => {
    return (
      <footer className="footer">
        <div className="footer-section">
          <h4>Ramchandra's<br></br> Group Tution</h4>
          
          <p>Nurturing young minds with knowledge, confidence, and the skills to succeed in life.</p>
          <br /><br />
          <p>© 2025 Ramchandra's group Tution. All rights reserved.</p>


          {/* <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Services</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Affiliate Program</a></li>
          </ul> */}
        </div>
  
        <div className="footer-section">
          <h4>Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>            
            <li><Link to="/class">Class</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/admission">Admission</Link></li>            
          </ul>
        </div>
  
        <div className="footer-section">
          <h4>Contact US </h4>
          <ul>
            <li><a href="https://maps.app.goo.gl/H5G55nMWhzrF5BZK7" target="_blank" id="address">📍400093,Mahakali caves,Andheri East</a></li>
            <li><Link to="/">📞 8591274695</Link></li>
            <li><Link to="/">✉Ramchandrastution@gmail.com</Link></li>
            
          </ul>
        </div>
  
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i> Facebook</a>
            <a href="https://www.instagram.com/_.rgt._2002/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"> </i> Instagram</a>
            <a href="https://web.whatsapp.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i>Whatsapp</a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i> LinkedIn</a>

            
            {/* <a href="#"><img src="./src/assets/facebook.png" /> Facebook</a><br/>
            <a href="#"><img src="./src/assets/instagram.png" />Instagram</a><br/>
            <a href="#"><img src="./src/assets/twitter.png " />Twitter</a><br/> */}
            {/* <a href="#"><i className="fab fa-linkedin"></i></a> */}
          </div>
        </div>
      </footer>
    );
  };
  
  export default Fotter;
  
