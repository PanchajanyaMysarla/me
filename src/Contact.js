import React from 'react';
import './Contact.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export default function Contact() {
  const email = "panchajanyamysarla@gmail.com"
  const phone = "(312)358-8684"
  const linkedinUrl = "https://www.linkedin.com/in/panchajanyamysarla"
  const githubUrl = "https://www.github.com/PanchajanyaMysarla"

  return (
    <div className="contact">
    <div className="phone">
      <FontAwesomeIcon icon={['fab', 'android']}/> {phone}
    </div>
    <div className="email">
      {email}
    </div>
    <div className="social">
      <i className="icon-linkedin">
        <FontAwesomeIcon onClick={() => window.open(linkedinUrl)} icon={['fab', 'linkedin']}/>
      </i>
      <i className="icon-github">
        <FontAwesomeIcon onClick={() => window.open(githubUrl)} icon={['fab', 'github']}/>
      </i>
    </div>
  </div>
)
}
