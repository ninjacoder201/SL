import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign up logic here
    console.log('Sign up attempted for:', formData.email);
    
    // For demo purposes, simulate successful registration
    if (formData.email && formData.password && agreedToTerms) {
      // Store login state in localStorage for persistence
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userEmail', formData.email);
      localStorage.setItem('userName', `${formData.firstName} ${formData.lastName}`);
      
      // Navigate to home page
      navigate('/');
      
      // Reload to update header state (in a real app, you'd use context/state management)
      window.location.reload();
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        {/* Header */}
        <div className="signup-header">
          <Link to="/" className="back-link">
            ← Back to speedyliquor.com
          </Link>
          <div className="signup-logo">
            <h1>Speedy Liquor</h1>
          </div>
        </div>

        {/* Sign Up Form */}
        <div className="signup-form-container">
          <h2>Create an Online Account</h2>
          <p className="signup-description">
            If you signed up in store, we can look up your account with the phone number 
            and email you provide in store. If you are new, complete the fields below to 
            automatically join in our loyalty program:
          </p>
          
          <form onSubmit={handleSubmit} className="signup-form">
            {/* Name Fields */}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            {/* Phone Number */}
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                placeholder="(999) 999-9999"
                required
              />
              <small className="form-help">
                If you gave us your phone number in store, use that number here
              </small>
            </div>

            {/* Email Address */}
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="name@domain.com"
                required
              />
              <small className="form-help">
                If you gave us your email in store, use that email here
              </small>
            </div>

            {/* Password */}
            <div className="form-group">
              <label htmlFor="password">Create a Password</label>
              <div className="password-input-container">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
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

            {/* Terms Agreement */}
            <div className="form-group terms-group">
              <label className="terms-label">
                <input
                  type="checkbox"
                  checked={agreedToTerms}
                  onChange={(e) => setAgreedToTerms(e.target.checked)}
                  required
                />
                <span className="checkmark"></span>
                I am at least 21 years old or older and I agree to the legal Terms and 
                Conditions of this program and that I am signing up to receive emails from 
                Speedy Liquor
              </label>
            </div>

            {/* View Terms Link */}
            <div className="terms-link-container">
              <Link to="/terms" className="terms-link">
                View Terms & Conditions
              </Link>
            </div>

            {/* Create Account Button */}
            <button type="submit" className="signup-button" disabled={!agreedToTerms}>
              Create Account
            </button>

            {/* Sign In Link */}
            <div className="signin-section">
              <span>Have an account already?</span>
              <Link to="/signin" className="signin-link">
                Sign in
              </Link>
            </div>
          </form>
        </div>

        {/* Footer */}
        <div className="signup-footer">
          <div className="footer-links">
            <Link to="/terms">Terms & Conditions</Link>
            <span>|</span>
            <Link to="/privacy">Privacy Policy</Link>
          </div>
          <p className="legal-notice">
            Due to legal restrictions, we must offer varying programs by state
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
