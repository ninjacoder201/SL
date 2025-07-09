import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignIn.css';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [keepSignedIn, setKeepSignedIn] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign in logic here
    console.log('Sign in attempted for:', email);
    
    // For demo purposes, simulate successful login
    // In a real app, this would validate credentials with an API
    if (email && password) {
      // Store login state in localStorage for persistence
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userEmail', email);
      
      // Navigate to home page
      navigate('/');
      
      // Reload to update header state (in a real app, you'd use context/state management)
      window.location.reload();
    }
  };

  return (
    <div className="signin-page">
      <div className="signin-container">
        {/* Header */}
        <div className="signin-header">
          <Link to="/" className="back-link">
            ← Back to speedyliquor.com
          </Link>
          <div className="signin-logo">
            <h1>Speedy Liquor</h1>
          </div>
        </div>

        {/* Sign In Form */}
        <div className="signin-form-container">
          <h2>Sign In</h2>
          
          <form onSubmit={handleSubmit} className="signin-form">
            {/* Email Field */}
            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Password Field */}
            <div className="form-group">
              <label htmlFor="password">Password *</label>
              <div className="password-input-container">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? 'HIDE' : 'SHOW'}
                </button>
              </div>
            </div>

            {/* Forgot Password Link */}
            <div className="forgot-password-container">
              <Link to="/forgot-password" className="forgot-password">
                Forgot Password?
              </Link>
            </div>

            {/* Keep Me Signed In */}
            <div className="form-group checkbox-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={keepSignedIn}
                  onChange={(e) => setKeepSignedIn(e.target.checked)}
                />
                <span className="checkmark"></span>
                Keep Me Signed In
                <span className="help-icon">?</span>
              </label>
            </div>

            {/* Sign In Button */}
            <button type="submit" className="signin-button">
              SIGN IN
            </button>

            {/* Create Account Link */}
            <div className="create-account-section">
              <span>New or signed up in store?</span>
              <Link to="/signup" className="create-account-link">
                Create Account
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
