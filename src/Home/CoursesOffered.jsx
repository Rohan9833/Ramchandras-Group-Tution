import React from "react";
import "./CoursesOffered.css"; 
import Science from "../assets/Science.jpeg";
import Maths from "../assets/Maths.jpg";

const courses = [
  {
    title: "Science",
    image: Science,
    description: "Schedule: Every Day (Sunday to Sunday), including Holidays. Duration: 3 to 4 hours daily.",
    details: "Commencing from 15th November: Sunday to Sunday and Holidays daily 3 to 4 hrs.",
    link: "https://www.science.org/",
  },
  {
    title: "Maths",
    image: Maths,
    description: "S.L.B. (Serious Learner’s Batches):",
    details: "Commencing from 1st week of December: Sunday to Sunday and Holidays daily 3 to 4 hrs.",
    link: "https://math.he.net/",
  },
  // {
  //   title: "Regular Test",
  //   image: "src/assets/personalised.jpeg",
  //   description: "Test your knowledge regularly.",
  //   details: "From 15th April to 31st May: Daily 6 Hours in the Morning or Evening",
  // },
];

const CoursesOffered = () => {
  return (
    <div className="parallax">
      <h2>Specialist</h2>
      <div className="courses">
        {courses.map((course, index) => (
          <div className="course-card" key={index}>
            <img src={course.image} alt={`${course.title} Course`} />
            <div className="course-info">
              <h3>{course.title}</h3>
              <p><strong>{course.description}</strong></p>
              <p><strong>{course.details}</strong></p>
              <a href={course.link}target="_blank" rel="noopener noreferrer">Read More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesOffered;
