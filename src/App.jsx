import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import MainImg from './Home/MainImg';
import AchieversSlider from './Home/AchieversSlider';
import CoursesOffered from './Home/CoursesOffered';
import Features from './Home/Features';
import IntroPara from './Home/IntroPara';
import Fotter from './Fotter';
import AboutUs from './About Us/AboutUs';
import Admission from './Admission/Admission';
import Class from './Class/Class';
import SignupPage from './Button/SignupPage';
import LoginPage from './Button/LoginPage';
import './App.css';

const AppShell = () => {
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';

  return (
    <div className="app-shell">
      {!isAuthPage && <Navbar />}

      <main className={isAuthPage ? 'auth-main' : 'page-main'}>
        <Routes>
          <Route path="/" element={
            <>
              <MainImg />
              <IntroPara />
              <Features />
              <CoursesOffered />
              <section className="achievers-section">
                <div className="section-heading">
                  <span className="eyebrow">PROGRESS THAT INSPIRES</span>
                  <h2>Our Achievers</h2>
                  <p>Consistent guidance, focused practice and confidence that shows in every result.</p>
                </div>
                <AchieversSlider />
              </section>
            </>
          } />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/class" element={<Class />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </main>

      {!isAuthPage && <Fotter />}
    </div>
  );
};

export default function App() {
  return <AppShell />;
}
