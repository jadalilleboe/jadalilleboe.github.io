import React from 'react'
import Navigation from './components/Navigation'
import Home from './components/Home'
import Footer from './components/Footer'
import { NavLink, Switch, Route } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return(
    <div className="content-wrapper">
      <Navigation />
      <Home />
      <Footer />
    </div>
  )
}

export default App;
