import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './AchieversSlider.css';
import A from '../assets/a.jpg';
import B from '../assets/b.jpg';
import C from '../assets/c.jpg';

const images = [A, B, C];

const AchieversSlider = () => {
  const [index, setIndex] = useState(0);
  const timer = useRef(null);

  useEffect(() => {
    timer.current = setInterval(() => {
      setIndex((current) => (current + 1) % images.length);
    }, 4500);

    return () => clearInterval(timer.current);
  }, []);

  return (
    <div className="achievers-wrap">
      <div className="achievers-slider">
        <div className="achievers-track" style={{ transform: `translateX(-${index * 100}%)` }}>
          {images.map((image, i) => (
            <div className="achiever-slide" key={image}>
              <img src={image} alt={`Student achievement ${i + 1}`} />
            </div>
          ))}
        </div>
        <button className="slider-arrow left" onClick={() => setIndex((index - 1 + images.length) % images.length)} aria-label="Previous achievement">
          <ChevronLeft size={20} />
        </button>
        <button className="slider-arrow right" onClick={() => setIndex((index + 1) % images.length)} aria-label="Next achievement">
          <ChevronRight size={20} />
        </button>
      </div>
      <div className="slider-dots">
        {images.map((_, i) => (
          <button key={i} className={i === index ? 'active' : ''} onClick={() => setIndex(i)} aria-label={`Show achievement ${i + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default AchieversSlider;
