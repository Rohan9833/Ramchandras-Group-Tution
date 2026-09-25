import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { auth } from './firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { Menu, X, LogIn, LogOut, UserRound, GraduationCap } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, setUser);
    return unsubscribe;
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.error('Logout Error:', error.message);
    }
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand" aria-label="Ramchandra's Group Tuition home">
          <span className="brand-mark">
            <img src="/Logo.png" alt="" />
          </span>
          <span className="brand-copy">
            <strong>Ramchandra's</strong>
            <small>GROUP TUITION</small>
          </span>
        </Link>

        <button
          className="navbar-toggle"
          onClick={() => setIsOpen((open) => !open)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} to="/">Home</Link>
          <Link className={`nav-link ${location.pathname === '/about-us' ? 'active' : ''}`} to="/about-us">About</Link>
          {user && <Link className={`nav-link ${location.pathname === '/class' ? 'active' : ''}`} to="/class">Classes</Link>}
          <Link className={`nav-link ${location.pathname === '/admission' ? 'active' : ''}`} to="/admission">Admissions</Link>

          {!user ? (
            <Link className="nav-cta" to="/login">
              <LogIn size={16} />
              Student Login
            </Link>
          ) : (
            <div className="nav-user">
              <span className="nav-avatar">
                {user.photoURL ? (
                  <img src={user.photoURL} alt="User profile" />
                ) : (
                  <UserRound size={18} />
                )}
              </span>
              <button className="nav-logout" onClick={handleLogout}>
                <LogOut size={16} />
                Logout
              </button>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
