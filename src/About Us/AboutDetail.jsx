import React from 'react';
import { Link } from 'react-router-dom';
import './AboutDetail.css';

const AboutDetail = () => (
  <section className="about-hero">
    <div className="about-hero-bg" />
    <div className="about-hero-content">
      <div className="about-breadcrumb"><Link to="/">Home</Link><span>/</span><span>About Us</span></div>
      <span className="eyebrow">WHO WE ARE</span>
      <h1>Education with purpose.<br /><em>Guidance with care.</em></h1>
      <p>Discover the people, principles and learning environment behind Ramchandra's Group Tuition.</p>
    </div>
  </section>
);
export default AboutDetail;