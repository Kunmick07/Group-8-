import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__about">
          <h3 className="footer__heading">About</h3>
          <p className="footer__desc">
            Built by Amaka, Ifeoma, and the Phoenix Cohort group — passionate about
            making planetary science accessible through data visualisation and clean design.
          </p>
          <div className="footer__team">
            <a
              href="https://amakandukwu.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
            >
              Amaka
            </a>
            <span className="footer__sep">·</span>
            <a
              href="https://www.linkedin.com/in/ifeomaokocha"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
            >
              Ifeoma
            </a>
          </div>
        </div>

        <div className="footer__credits">
          <p className="footer__copy">
            ©2025 Design by{' '}
            <a href="https://amakandukwu.com/" target="_blank" rel="noopener noreferrer" className="footer__link">
              Amaka
            </a>{' '}
            &{' '}
            <a href="https://www.linkedin.com/in/ifeomaokocha" target="_blank" rel="noopener noreferrer" className="footer__link">
              Ifeoma A.
            </a>
            {' '}All rights reserved.
          </p>
          <p className="footer__copy">
            Built by{' '}
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
            >
              GroupName
            </a>
          </p>
          <p className="footer__copy">
            <a
              href="https://tsacademyonline.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link footer__link--highlight"
            >
              TSAcademy
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
