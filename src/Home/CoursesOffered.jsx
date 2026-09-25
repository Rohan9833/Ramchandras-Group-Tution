import React from 'react';
import { ArrowRight, Calculator, FlaskConical } from 'lucide-react';
import { Link } from 'react-router-dom';
import './CoursesOffered.css';
import Science from '../assets/Science.jpeg';
import Maths from '../assets/Maths.jpg';

const courses = [
  {
    title: 'Science',
    icon: FlaskConical,
    image: Science,
    description: 'Focused preparation with concept clarity, revision and regular practice.',
    details: 'Special batches • 3–4 hours daily',
  },
  {
    title: 'Mathematics',
    icon: Calculator,
    image: Maths,
    description: 'Build strong fundamentals and solve problems with confidence and method.',
    details: 'Serious Learner’s Batches • 3–4 hours daily',
  },
];

const CoursesOffered = () => (
  <section className="specialist-section">
    <div className="specialist-backdrop" />
    <div className="specialist-content">
      <div className="section-heading specialist-heading">
        <span className="eyebrow">ACADEMIC SPECIALISTS</span>
        <h2>Strong fundamentals. Better results.</h2>
        <p>Dedicated subject-focused support for students who want to understand, practice and improve.</p>
      </div>
      <div className="courses-grid">
        {courses.map(({ title, icon: Icon, image, description, details }) => (
          <article className="course-card" key={title}>
            <div className="course-image">
              <img src={image} alt={title} />
              <span><Icon size={20} /></span>
            </div>
            <div className="course-body">
              <div className="course-kicker">SPECIALIST BATCH</div>
              <h3>{title}</h3>
              <p>{description}</p>
              <div className="course-detail">{details}</div>
              <Link to="/admission">Learn more <ArrowRight size={16} /></Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default CoursesOffered;
