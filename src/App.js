import React from 'react'
import jadaPic from './img/jadapic.jpeg'
import './App.css';

const App = () => {
  return(
    <div>
      <h1>Hi! I'm Jada Lilleboe.</h1>
      <h2>I'm a computer science student at the University of Minnesota Twin-Cities.</h2>
      <img src={jadaPic} alt="Jada Lilleboe" width={300} height={400}/>
    </div>
  )
}

export default App;
