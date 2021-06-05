import React from 'react'
import jadaPic from './img/jadapic.jpeg'
import './App.css';

const App = () => {
  return(
    <div>
      <h1>Hi! I'm Jada Lilleboe.</h1>
      <h2>I'm a computer science student at the University of Minnesota Twin-Cities.</h2>
      <image src={jadaPic} alt="Picture of Jada Lilleboe"></image>
    </div>
  )
}

export default App;
