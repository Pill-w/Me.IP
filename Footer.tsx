import React from 'react';
import { FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa';

function Footer(): JSX.Element {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://github.com/janedeveloper" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/janedeveloper" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="https://stackoverflow.com/users/janedeveloper" target="_blank" rel="noopener noreferrer" aria-label="Stack Overflow">
          <FaStackOverflow />
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} Jane Developer</p>
    </footer>
  );
}

export default Footer;
