import React from 'react'
import { Link } from 'react-router-dom'
import "../assets/css/NavBar.css"

export const NavBar = () => {
  return (
    <nav className="navbar">
      <a href="#" className="logo">DocStruct</a>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><Link to="/visualization">Visualize the Data</Link></li>
        <li><Link to="/generate">Generate PDF</Link></li>
      </ul>
    </nav>
  );
}

