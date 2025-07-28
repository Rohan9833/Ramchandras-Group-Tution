import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import './Navbar.css';
import Logo from "../public/Logo.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("Logout Successful!");
      setUser(null);
      navigate("/");
    } catch (error) {
      console.error("Logout Error:", error.message);
    }
  };

  
  const googleDefaultImage = 'https://www.gstatic.com/images/branding/product/2x/avatar_circle_blue_512dp.png';
  
  const customDefaultImage = './src/assets/defaultlogin.png';

  
  const userProfileImage = user?.photoURL && user?.photoURL.includes('googleusercontent') && user?.photoURL === googleDefaultImage ? customDefaultImage : user?.photoURL;

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <img src={Logo} className='logoimg'></img>
          Ramchandra's Group Tuition
        </Link>

        <div className="navbar-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item"><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li className="nav-item"><Link to="/about-us" onClick={closeMenu}>About Us</Link></li>
          {user && <li className="nav-item"><Link to="/class" onClick={closeMenu}>Class</Link></li>}
          <li className="nav-item"><Link to="/admission" onClick={closeMenu}>Admission</Link></li>

          {!user ? (
            <li>
              <Link to="/login" className="nav-item-button" onClick={closeMenu}>
                Login
              </Link>
            </li>
          ) : (
            <>
              <li>
                <button className="nav-item-button" onClick={handleLogout}>
                  Logout
                </button>
              </li>
              <li className="nav-profile">
                <img 
                  src={userProfileImage || "https://cdn-icons-png.flaticon.com/512/149/149071.png"} 
                  alt="User Profile" 
                  className="profile-img" 
                />
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
