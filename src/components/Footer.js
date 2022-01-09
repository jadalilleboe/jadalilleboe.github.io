import React from 'react'
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
    return (
      <footer>
        <p className="copyright">© {new Date().getFullYear()} by Jada Lilleboe.</p>
        <ul className="socials-bar">
          <li><SocialIcon url="https://www.linkedin.com/in/jadalilleboe/" target="_blank"/></li>
          <li><SocialIcon url="https://github.com/jadalilleboe" bgColor="white" target="_blank"/></li>
          <li><SocialIcon url="https://www.tiktok.com/@codeforbeginners?lang=en" bgColor="white" target="_blank"/></li>
        </ul>
      </footer>
    )
  }

export default Footer