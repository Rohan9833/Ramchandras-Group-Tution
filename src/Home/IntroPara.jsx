import React, { useEffect, useRef } from "react";
import "./IntroPara.css";

const IntroPara = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null, 
      rootMargin: "0px",
      threshold: 0.2, 
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("slide-down");
          observer.unobserve(entry.target); 
        }
      });
    }, options);

    if (leftRef.current) observer.observe(leftRef.current);
    if (rightRef.current) observer.observe(rightRef.current);

    return () => {
      if (leftRef.current) observer.unobserve(leftRef.current);
      if (rightRef.current) observer.unobserve(rightRef.current);
    };
  }, []);

  return (
    <div className="outer-intro-para">
      <div className="intro-para">
        <div className="left" ref={leftRef}>
          <p>
            <strong>Ramchandra's Group Tuition</strong> provides high-quality education for Classes 6th to 10th,  
            with expert guidance and interactive learning to make studies effective and accessible.
          </p>  
        </div>
        <div className="right" ref={rightRef}>
          <p>
            Ramchandra, the founder and driving force behind <strong>Ramchandra's Group Tuition</strong>,
            started with a vision to provide quality education to students. With dedication and a passion
            for teaching, the institute has grown, earning the trust of parents and students alike.
            The commitment to academic excellence and personalized learning continues to be the foundation 
            of its success.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IntroPara;
