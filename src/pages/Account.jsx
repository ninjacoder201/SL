import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Account.css';

const Account = () => {
  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const loginState = localStorage.getItem('isLoggedIn');
    if (loginState !== 'true') {
      navigate('/signin');
      return;
    }

    // Get user info from localStorage
    const email = localStorage.getItem('userEmail');
    const name = localStorage.getItem('userName');
    
    setUserEmail(email || '');
    setUserName(name || '');
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userName');
    navigate('/');
    window.location.reload();
  };

  return (
    <div className="account-page">
      <div className="account-container">
        <div className="account-header">
          <h1>My Account</h1>
          <Link to="/" className="back-home">← Back to Home</Link>
        </div>

        <div className="account-content">
          <div className="account-info">
            <h2>Account Information</h2>
            {userName && <p><strong>Name:</strong> {userName}</p>}
            <p><strong>Email:</strong> {userEmail}</p>
          </div>

          <div className="account-actions">
            <h3>Quick Actions</h3>
            <div className="action-buttons">
              <Link to="/orders" className="action-btn">View Order History</Link>
              <Link to="/profile" className="action-btn">Edit Profile</Link>
              <Link to="/addresses" className="action-btn">Manage Addresses</Link>
              <Link to="/preferences" className="action-btn">Preferences</Link>
            </div>
          </div>

          <div className="logout-section">
            <button onClick={handleLogout} className="logout-button">
              Log Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
