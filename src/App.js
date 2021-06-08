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
          <li>Blog</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className="home-content">
        <div className="home-left left-grid-item">
          <h1>Hi! I'm Jada Lilleboe.</h1>
          <h2>I'm a computer science student at the University of Minnesota Twin-Cities.</h2>
          <p>Feel free to explore this site to learn more about me!</p>
        </div>
        <div className="middle-grid-item jada-picture">
          <img src={jadaPic} alt="Jada Lilleboe" className="img-fluid"/>
        </div>
        {/* <div className="right-grid=item">
          <img src="https://via.placeholder.com/150" alt="placeholder" />
        </div> */}
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
