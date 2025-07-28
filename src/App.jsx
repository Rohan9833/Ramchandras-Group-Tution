import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import MainImg from './Home/MainImg';
import AchieversSlider from "./Home/AchieversSlider";
import CoursesOffered from "./Home/CoursesOffered";
import Features from "./Home/Features";
import IntroPara from './Home/IntroPara';
import Fotter from './Fotter';
import AboutUs from './About Us/AboutUs';
import Admission from "./Admission/Admission";
import Class from "./Class/Class";
import SignupPage from './Button/SignupPage';
import LoginPage from './Button/LoginPage';

import './App.css';

const App = () => {
  return (
    <div className="center">
      <div id='croped'>
        <Navbar />

        <Routes>
          <Route path="/" element={
            <>
              <MainImg />
              <IntroPara />
              <Features />
              <CoursesOffered />
              <div className="achivers">
                <h2>Achievers</h2>
                <p id='center'>We have unique facilities for our students</p>
                <hr />
                <AchieversSlider />
              </div>
            </>
          } />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path='/admission' element={<Admission />} />
          <Route path='/class' element={<Class />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage />} />
        </Routes>

        <Fotter />
      </div>
    </div>
  );
};

export default App;
