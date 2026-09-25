import React from 'react';
import { BookOpenCheck, ClipboardCheck, Radio, Sparkles } from 'lucide-react';
import './Features.css';

const features = [
  { imgSrc: '/live.jpeg', icon: Radio, title: 'Live interactive sessions', desc: 'Real-time teaching, questions and immediate feedback that keeps students engaged.' },
  { imgSrc: '/teacher1.jpeg', icon: Sparkles, title: 'Experienced faculty', desc: 'Clear explanations and practical teaching techniques built around student needs.' },
  { imgSrc: '/test.jpeg', icon: ClipboardCheck, title: 'Tests & assessment', desc: 'Regular topic-wise and major tests reveal progress and the areas that need more practice.' },
  { imgSrc: '/plan.webp', icon: BookOpenCheck, title: 'Personalized study plan', desc: 'A focused plan helps students build better habits and make steady academic progress.' },
];

const Features = () => (
  <section className="features-section">
    <div className="section-heading">
      <span className="eyebrow">THE LEARNING EXPERIENCE</span>
      <h2>Everything is built around better learning.</h2>
      <p>From the classroom to revision, every part of the experience is designed to make learning more focused and effective.</p>
    </div>
    <div className="features-grid">
      {features.map(({ imgSrc, icon: Icon, title, desc }) => (
        <article className="feature-card" key={title}>
          <div className="feature-image-wrap">
            <img src={imgSrc} alt="" />
            <span className="feature-icon"><Icon size={18} /></span>
          </div>
          <div className="feature-card-body">
            <h3>{title}</h3>
            <p>{desc}</p>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default Features;
