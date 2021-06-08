import React from 'react'
import Navigation from './components/Navigation'
import Home from './components/Home'
import About from './components/About'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Footer from './components/Footer'
import { Switch, Route } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const Main = () => (
  <Switch>
    <Route path='/' component={Home}></Route>
    <Route path='/about' component={About}></Route>
    <Route path='/blog' component={Blog}></Route>
    <Route path='/projects' component={Projects}></Route>
    <Route path='/contact' component={Contact}></Route>
  </Switch>
)

const App = () => {
  return(
    <div className="content-wrapper">
      <Navigation />
      <Main />
      <Footer />
    </div>
  )
}

export default App;
