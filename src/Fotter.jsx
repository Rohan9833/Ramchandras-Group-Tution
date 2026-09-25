import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Instagram, Facebook, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import './Fotter.css';

const Fotter = () => (
  <footer className="site-footer">
    <div className="footer-top">
      <div className="footer-brand">
        <div className="footer-brand-row">
          <img src="/Logo.png" alt="" />
          <div><strong>Ramchandra's</strong><span>GROUP TUITION</span></div>
        </div>
        <p>Nurturing young minds with knowledge, confidence and the skills to succeed.</p>
        <div className="footer-socials">
          <a href="https://www.instagram.com/_.rgt._2002/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={17} /></a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook size={17} /></a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a>
        </div>
      </div>

      <div className="footer-column">
        <h4>Explore</h4>
        <Link to="/">Home</Link>
        <Link to="/about-us">About us</Link>
        <Link to="/class">Classes</Link>
        <Link to="/admission">Admissions</Link>
      </div>

      <div className="footer-column">
        <h4>Contact</h4>
        <a href="https://maps.app.goo.gl/H5G55nMWhzrF5BZK7" target="_blank" rel="noopener noreferrer"><MapPin size={15} /> 400093, Mahakali Caves, Andheri East</a>
        <a href="tel:8591274695"><Phone size={15} /> 85912 74695</a>
        <a href="mailto:Ramchandrastution@gmail.com"><Mail size={15} /> Ramchandrastution@gmail.com</a>
      </div>

      <div className="footer-column footer-callout">
        <span>READY TO GET STARTED?</span>
        <h4>Give your learning a stronger direction.</h4>
        <Link to="/admission">Apply for admission <ArrowUpRight size={16} /></Link>
      </div>
    </div>

    <div className="footer-bottom">
      <span>© 2026 Ramchandra's Group Tuition. All rights reserved.</span>
      <span>Focused learning • Consistent progress</span>
    </div>
  </footer>
);

export default Fotter;
