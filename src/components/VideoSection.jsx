import React from 'react'
import './VideoSection.css'

export default function VideoSection() {
  return (
    <section className="video-section">
      <div className="container video-section__inner">
        <div className="video-wrapper">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="planet-video"
            poster="https://anurella.github.io/images/planets/earth.jpg"
          >
            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="video-overlay">
            <div className="play-icon">▶</div>
          </div>
        </div>
        <div className="video-content">
          <h2 className="video-content__title">
            How Planetary Data Helps Us<br />
            <span className="highlight">Understand Space</span>
          </h2>
          <p className="video-content__body">
            Planetary science goes beyond images. Comparing{' '}
            <strong>mass</strong>, <strong>diameter</strong>,{' '}
            <strong>gravity</strong>, and <strong>density</strong>, we gain
            insight into how planets form, behave, and interact within the
            solar system.
          </p>
        </div>
      </div>
    </section>
  )
}
