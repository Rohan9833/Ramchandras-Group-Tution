
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, provider, signInWithPopup } from '../firebase';
import { Link } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  
  const handleEmailLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Login Successful!');
    } catch (error) {
      setError(error.message);  
    }
  };

  
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("User logged in:", user);
      alert('Google Login Successful!');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h2 className="login-box__title">Login</h2>
        
        
        <form onSubmit={handleEmailLogin}>
          <input
            className="login-box__input"
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="login-box__input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="login-box__button" type="submit">Login</button>
        </form>

        
        <button onClick={handleGoogleLogin} className="login-box__google-btn">
          Login with Google
        </button>

       
        {error && <p className="login-box__error">{error}</p>}

        <hr></hr>
        <Link className='signup' to='/signup'>Sign Up</Link>
      </div>
    </div>
  );
};

export default LoginPage;
