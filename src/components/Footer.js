import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
      <a
        className='social-icon-link gmail'
        href="Gmail"
        target='_blank'
        rel="noreferrer"
        aria-label='Gmail'
        onClick={() => window.location = 'mailto:jeffreypeng2@gmail.com'}
      >
        <i class="fa fa-envelope" aria-hidden="true"></i>
      </a>
      <a
        className='social-icon-link github'
        href="https://github.com/nesteajeff"
        target='_blank'
        rel="noreferrer"
        aria-label='Github'
      >
        <i class='fab fa-github' />
      </a>
      <a
        className='social-icon-link linkedin'
        href="https://www.linkedin.com/in/jeffrey-peng1/"
        target='_blank'
        rel="noreferrer"
        aria-label='LinkedIn'
      >
        <i class='fab fa-linkedin' />
      </a>
    </div>
  );
}

export default Footer;