import React, { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import Home from './components/Home'
import About from './components/About'
import BlogPage from './components/BlogPage'
import BlogPost from './components/BlogPost'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Footer from './components/Footer'
import postService from './services/posts'
import { Switch, Route } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const Main = ({ posts }) => (
  <Switch>
    <Route exact path='/' component={Home}></Route>
    <Route exact path='/contact' component={Contact}></Route>
    <Route exact path='/projects' component={Projects}></Route>
    <Route path='/blog/page/:pageNum' render={(props) => (
      <BlogPage pageNum={props.match.params.pageNum} posts={posts}/>
    )}></Route>
    <Route exact path='/blog/post/:id/:titleURL' render={(props) => (
      <BlogPost id={props.match.params.id} />
    )}></Route>
    <Route exact path='/about' component={About}></Route>
    
  </Switch>
)

const App = () => {
  const [ posts, setPosts ] = useState([])
  useEffect(() => {
    postService.getAll()
    .then(posts => {
        posts.reverse()
        setPosts(posts)
      })
      .catch(err => console.log(err))
  }, [])
  return(
    <div className="content-wrapper">
      <Navigation />
      <Main posts={posts}/>
      <Footer />
    </div>
  )
}

export default App;
