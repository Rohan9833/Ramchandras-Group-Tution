import React from 'react';
import { ArrowUpRight, GraduationCap, UsersRound } from 'lucide-react';
import { Link } from 'react-router-dom';
import './IntroPara.css';

const IntroPara = () => (
  <section className="intro-section">
    <div className="intro-inner">
      <div className="intro-lead">
        <span className="eyebrow">WHY RAMCHANDRA'S</span>
        <h2>A stronger foundation for the years that matter.</h2>
        <Link to="/about-us" className="text-link">Meet our approach <ArrowUpRight size={17} /></Link>
      </div>
      <div className="intro-copy">
        <p>
          Ramchandra's Group Tuition provides focused academic support for Classes 6th to 10th,
          combining clear explanations, active practice and a learning environment where students
          feel comfortable asking questions.
        </p>
        <div className="intro-stats">
          <div><GraduationCap size={22} /><span><strong>Classes 6–10</strong>Academic support</span></div>
          <div><UsersRound size={22} /><span><strong>Personal attention</strong>Small-group learning</span></div>
        </div>
      </div>
    </div>
  </section>
);

export default IntroPara;
