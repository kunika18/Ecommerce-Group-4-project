
import React, { useState } from 'react';
import './Auth.css';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isLogin && password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    // Here you would typically make an API call
    alert(${isLogin ? 'Login' : 'SignUp'} successful!);
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>{isLogin ? 'Login Form' : 'SignUp Form'}</h2>
        <div className="toggle-buttons">
          <button className={isLogin ? 'active' : ''} onClick={() => setIsLogin(true)}>Login</button>
          <button className={!isLogin ? 'active' : ''} onClick={() => setIsLogin(false)}>SignUp</button>
        </div>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <>
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </>
          )}
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {!isLogin && (
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          )}
          {isLogin && <a href="#forgot-password" className="forgot-password">Forgot password?</a>}
          <button type="submit" className="submit-button">{isLogin ? 'Login' : 'SignUp'}</button>
        </form>
        <p>
          {isLogin ? 'Not a member? ' : 'Already a member? '} 
          <button className="toggle-link" onClick={toggleAuthMode}>
            {isLogin ? 'SignUp now' : 'Login now'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Auth;
