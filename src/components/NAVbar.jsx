// New NAvbar

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import logo from '../assets/images/logo8.jpg';
import '../styles/Navbar.css';

const Navbar1 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showContentMenu, setShowContentMenu] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleProfileMenu = () => setShowProfileMenu(!showProfileMenu);
  const toggleContentMenu = () => setShowContentMenu(!showContentMenu);

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error('Failed to logout:', error);
    }
  };

  const handleDeleteAccount = async () => {
    if (window.confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      try {
        await logout();
        navigate('/');
      } catch (error) {
        console.error('Failed to delete account:', error);
      }
    }
  };

  const renderAuthLinks = () => {
    if (!user) {
      return (
        <>
          <Link to="/login" className="navbar-item">Login</Link>
          <Link to="/signup" className="navbar-item">Sign Up</Link>
        </>
      );
    }

    return (
      <div className="profile-menu-container">
        <button className="profile-menu-button" onClick={toggleProfileMenu}>
          Profile
          <span className="profile-menu-arrow"></span>
        </button>
        {showProfileMenu && (
          <div className="profile-dropdown">
            <Link to="/profile" className="dropdown-item">View Profile</Link>
            <button onClick={handleDeleteAccount} className="dropdown-item delete-account">Delete Account</button>
            <button onClick={handleLogout} className="dropdown-item">Sign Out</button>
          </div>
        )}
      </div>
    );
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">
          <img src={logo} alt="Logo" className="navbar-logo" />
        </Link>
      </div>

      <button className="navbar-toggle" onClick={toggleMenu}>
        <span className="navbar-toggle-icon"></span>
      </button>

      <div className={`navbar-menu ${isOpen ? 'is-open' : ''}`}>
        <Link to="/dashboard" className="navbar-item">Home</Link>
        {user && (
          <div className="profile-menu-container">
            <button className="profile-menu-button" onClick={toggleContentMenu}>
              Content
              <span className="profile-menu-arrow"></span>
            </button>
            {showContentMenu && (
              <div className="profile-dropdown">
                <Link to="/promptbar" className="dropdown-item">Dictionary</Link>
                <Link to="/courtroom" className="dropdown-item">ChatBox</Link>
                <Link to="/blog" className="dropdown-item">Blog</Link>
              </div>
            )}
          </div>
        )}
        {renderAuthLinks()}
      </div>
    </nav>
  );
};

export default Navbar1;
