import React from 'react'
import './Footer.css'

const teamMembers = [
  { name: 'Kesideya Eryhka Ike-Okoye', url: 'https://www.linkedin.com/in/kesideyaike-okoye' },
  { name: 'Ogunjobi Olawale Ismail', url: 'https://github.com/oladev001' },
  { name: 'Adegboyega Dorcas Anuoluwa', url: null },
  { name: 'Akinola Fareedah Ayomide', url: 'https://www.linkedin.com/in/fareedah-akinola-8a1419356' },
  { name: 'Onifade Akinkunmi Micheal', url: 'https://www.linkedin.com/in/akinkunmi-onifade-18326a3aa' },
  { name: 'Zih Jude', url: 'https://www.linkedin.com/in/zih-jude-216674255' },
  { name: 'Adeyefa Eunice Toluwanimi', url: 'https://www.linkedin.com/in/eunice-adeyefa-127327386' },
  { name: 'Ohanwe Ugonna Kenneth', url: 'https://github.com/ugoss1' },
  { name: 'Adeyemi Stephen', url: null },
  { name: 'Aderibigbe Ayomiposi Ebenezer', url: 'https://www.linkedin.com/in/ayomiposi-aderibigbe-680aa7246' },
  { name: 'Ige Olamilekan Timothy', url: 'https://github.com/account' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__about">
          <h3 className="footer__heading">About</h3>
          <p className="footer__desc">
            Built by the Phoenix Cohort Group 8 — passionate about making planetary
            science accessible through data visualisation and clean design.
          </p>
          <ul className="footer__team-list">
            {teamMembers.map((member) => (
              <li key={member.name}>
                {member.url ? (
                  <a
                    href={member.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer__link"
                  >
                    {member.name}
                  </a>
                ) : (
                  <span className="footer__name">{member.name}</span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__credits">
          <p className="footer__copy">
            ©2026 Built by Group 8.
{' '}All rights reserved.
          </p>
          <p className="footer__copy">
            Built by{' '}
            <a
              href="https://github.com/Kunmick07/Group-8-"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
            >
              Group 8
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