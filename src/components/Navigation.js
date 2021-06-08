import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
    return (
      <nav>
        <ul>
          <li><NavLink exact to='/' activeClassName="current" className="navig-link" >Home</NavLink></li>
          <li><NavLink exact to='/about' className="navig-link" activeClassName="current">About</NavLink></li>
          <li><NavLink exact to='/blog' className="navig-link" activeClassName="current">Blog</NavLink></li>
          <li><NavLink exact to='/projects' className="navig-link" activeClassName="current">Projects</NavLink></li>
          <li><NavLink exact to='/contact' className="navig-link" activeClassName="current">Contact</NavLink></li>
        </ul>
      </nav>
    )
  }

export default Navigation