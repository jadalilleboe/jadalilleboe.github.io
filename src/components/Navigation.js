import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
    return (
      <nav>
        <ul>
          <li><NavLink to='/' className="navig-link">Home</NavLink></li>
          <li><NavLink to='/about' className="navig-link">About</NavLink></li>
          <li><NavLink to='/blog' className="navig-link">Blog</NavLink></li>
          <li><NavLink to='/projects' className="navig-link">Projects</NavLink></li>
          <li><NavLink to='/contact' className="navig-link">Contact</NavLink></li>
        </ul>
      </nav>
    )
  }

export default Navigation