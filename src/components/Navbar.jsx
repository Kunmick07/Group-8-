import React from 'react'
import './Navbar.css'

export default function Navbar() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="navbar">
      <div className="container navbar__inner">
        <a href="#" className="navbar__logo">
          <span className="logo-icon">🪐</span>
          <span className="logo-text">planet</span>
        </a>
        <div className="navbar__links">
          <button onClick={() => scrollToSection('planets-section')} className="nav-link">
            Explore the Data
          </button>
          <button onClick={() => scrollToSection('form-section')} className="nav-link">
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  )
}
