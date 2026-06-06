import React from 'react'
import './Hero.css'

export default function Hero() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero">
      <div className="hero__bg">
        <div className="hero__stars"></div>
        <div className="hero__glow"></div>
      </div>
      <div className="container hero__inner">
        <div className="hero__content">
          <h1 className="hero__title">
            Explore Our Solar<br />System Through Data
          </h1>
          <p className="hero__subtitle">
            Understand the planets not just by name, but by measurable facts.
            From size and mass to gravity and density, this page breaks down
            the solar system in a clear, data-driven way.
          </p>
          <div className="hero__ctas">
            <button
              className="btn btn--primary"
              onClick={() => scrollToSection('planets-section')}
            >
              Explore the Data
            </button>
            <button
              className="btn btn--outline"
              onClick={() => scrollToSection('form-section')}
            >
              Contact Us
            </button>
          </div>
        </div>
        <div className="hero__visual">
          <div className="planet-sphere">
            <img
              src="https://anurella.github.io/images/planets/earth.jpg"
              alt="Earth from space"
              className="planet-img"
            />
            <div className="planet-ring"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
