import React from 'react'
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
    return (
      <footer>
        <p className="copyright">© 2021 by Jada Lilleboe.</p>
        <ul className="socials-bar">
          <li><SocialIcon url="https://www.linkedin.com/in/jada-lilleboe-aa2599202/" /></li>
          <li><SocialIcon url="https://github.com/jadalilleboe" bgColor="white"/></li>
          <li><SocialIcon url="https://www.tiktok.com/@codeforbeginners?lang=en" bgColor="white"/></li>
        </ul>
      </footer>
    )
  }

export default Footer