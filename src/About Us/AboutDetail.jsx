import React from "react";
import { Link } from 'react-router-dom';
import AboutUs from "./AboutUs";
import "./AboutDetail.css"; 

const AboutDetail = () => {
  return (
    <section className="about-us-section">
      <div className="overlay">
        <div className="breadcrumb">
          <Link to="/" className="breadcrumb-link">Homee</Link> ➔ 
          <Link to="/about-us" className="breadcrumb-link">About Us</Link>
        </div>
        <h1 className="title">Know Us Better</h1>
      </div>
    </section>
  );
};

export default AboutDetail;
