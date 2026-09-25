import React from 'react';
import { ArrowRight, CheckCircle2, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import './MainImg.css';
import MainImage from '../assets/play.jpg';

function MainImg() {
  return (
    <section className="hero">
      <img className="hero-image" src={MainImage} alt="Students learning at Ramchandra's Group Tuition" />
      <div className="hero-overlay" />
      <div className="hero-content">
        <span className="hero-badge">TRUSTED LEARNING • CLASSES 6–10</span>
        <h1>Learn with clarity.<br /><em>Grow with confidence.</em></h1>
        <p>
          Focused classroom teaching, personal attention and consistent practice
          designed to help every student build a stronger academic foundation.
        </p>
        <div className="hero-actions">
          <Link to="/admission" className="hero-primary">
            Explore Admissions <ArrowRight size={18} />
          </Link>
          <Link to="/about-us" className="hero-secondary">
            <span><Play size={15} fill="currentColor" /></span>
            Discover our approach
          </Link>
        </div>
        <div className="hero-trust">
          <span><CheckCircle2 size={17} /> Concept-focused teaching</span>
          <span><CheckCircle2 size={17} /> Regular assessments</span>
          <span><CheckCircle2 size={17} /> Personal guidance</span>
        </div>
      </div>
      <div className="hero-scroll">SCROLL TO EXPLORE <span /></div>
    </section>
  );
}

export default MainImg;
