import React from "react";
import "./Features.css"; 
// import Live from "../assets/live.jpeg";
// import Teacher from "../assets/teacher1.jpeg";
// import Test from "../assets/test.jpeg";
// import Plan from "../assets/plan.webp";

const features = [
  { imgSrc: "/live.jpeg", title: "LIVE INTERACTIVE SESSIONS", desc: "Engage in real-time learning with our expert instructors. Participate in discussions, ask questions, and get immediate feedback during live classes!" },
  { imgSrc: "/teacher1.jpeg", title: "EXPERIENCED FACULTY", desc: "Our faculty add experience and value to students’ learning constantly with advanced teaching techniques and quick doubt clarification." },
  { imgSrc: "/test.jpeg", title: "TESTS & ASSESSMENT", desc: "Our topic-wise tests, major-tests, and rigorous feedback mechanism help the students to know their level of understanding." },
  { imgSrc: "/plan.webp", title: "PERSONALIZED STUDY PLAN", desc: "We create personalized study plans tailored to your strengths and weaknesses to maximize your learning potential." },
];

const Features = () => (
  <section className="features">
    {features.map((feature, index) => (
      <div className="feature" key={index}>
        <img src={feature.imgSrc} alt={feature.title} />
        <h3>{feature.title}</h3>
        <p>{feature.desc}</p>
      </div>
    ))}
  </section>
);

export default Features;
