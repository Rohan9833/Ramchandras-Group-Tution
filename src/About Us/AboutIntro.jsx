import React from "react";
import "./AboutIntro.css";

const AboutIntro = () => {
  return (
    <section className="about-section">
      <h2 className="about-title">ABOUT</h2>
      <blockquote className="about-quote">
        "Education is not the filling of a pail, but the lighting of a fire."
      </blockquote>
      <div className="about-content">
        <p>
          At Ramchandra's Group Tuition, we believe in nurturing young minds
          with personalized attention and innovative teaching methods. Our
          commitment is to create a learning environment that inspires curiosity
          and passion for knowledge.
        </p>
        <p>
          Our team of dedicated educators specializes in a wide range of
          subjects, ensuring every student reaches their full potential. Whether
          it's academic excellence or holistic development, we're here to guide
          the way.
        </p>
      </div>
    </section>
  );
};

export default AboutIntro;
