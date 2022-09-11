import React from 'react'
import '../App.css';
import './ContactSect.css'

function ContactSect() {
  return (
    <div className='contact-sect-container'>
      <h1>Email:</h1>
      <a
        className='social-icon-link gmail'
        href="Gmail"
        target='_blank'
        rel="noreferrer"
        aria-label='Gmail'
        onClick={() => window.location = 'mailto:jeffreypeng2@gmail.com'}
      >
        jeffreypeng2@gmail.com
      </a>
      <h1>GitHub:</h1>
      <a
        class='social-icon-link github'
        href="https://github.com/nesteajeff"
        target='_blank'
        rel="noreferrer"
        aria-label='Github'
      >
        github.com/nesteajeff
        </a>
      <h1>LinkedIn:</h1>
      <a
        class='social-icon-link linkedin'
        href="https://www.linkedin.com/in/jeffrey-peng1/"
        target='_blank'
        rel="noreferrer"
        aria-label='LinkedIn'
      >
        linkedin.com/in/jeffrey-peng1
        </a>
    </div>
  )
}

export default ContactSect
