import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}
