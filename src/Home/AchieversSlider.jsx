import React, { useEffect, useRef } from "react";
import "./AchieversSlider.css"; 
import A from "../assets/a.jpg"
import B from "../assets/b.jpg"
import C from "../assets/c.jpg"


const AchieversSlider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let scrollAmount = 0;
    const scrollWidth = 700;    

    const scrollImages = () => {
      scrollAmount += scrollWidth;
      if (scrollAmount >= slider.scrollWidth) {
        scrollAmount = 0; 
      }
      
      slider.style.transform = `translateX(-${scrollAmount}px)`;
    };

    const interval = setInterval(scrollImages, 3000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="outerdiv">
      <div className="slider-container">
      <div className="slider" ref={sliderRef}>
        <img src={A} alt="Achiever 1" />
        <img src={B} alt="Achiever 2" />
        <img src={C} alt="Achiever 3" />
      </div>
      </div>
    </div>
    
  );
};

export default AchieversSlider;
