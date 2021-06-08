import React from 'react'
import jadaPic from '../img/jadapic.jpeg'

const Home = () => {
    return(
      <div className="home-content">
        <div className="home-left left-grid-item">
          <h1>Hi! I'm Jada Lilleboe.</h1>
          <h2>I'm a computer science student at the University of Minnesota Twin-Cities.</h2>
          <p>Feel free to explore this site to learn more about me!</p>
        </div>
        <div className="middle-grid-item jada-picture">
          <img src={jadaPic} alt="Jada Lilleboe" className="img-fluid"/>
        </div>
      </div>
    )
  }

export default Home