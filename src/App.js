import React from 'react'
import jadaPic from './img/jadapic.jpeg'
import { NavLink, Switch, Route } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const Home = () => {
  return(
    <div className="home-wrapper">
      <nav>
        <ul>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className="home-content">
        <h1 className="left-grid-item">Hi! I'm Jada Lilleboe.</h1>
        <h2 className="left-grid-item">I'm a computer science student at the University of Minnesota Twin-Cities.</h2>
        <img src={jadaPic} alt="Jada Lilleboe" width={300} height={400} className="right-grid-item"/>
      </div>
    </div>
  )
}
const Footer = () => {
  return (
    <footer>
      <p className="copyright">© 2021 by Jada Lilleboe.</p>
    </footer>
  )
}

const App = () => {
  return(
    <div className="content-wrapper">
      <Home />
      <Footer />
    </div>
  )
}

export default App;
