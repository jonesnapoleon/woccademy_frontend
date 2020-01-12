import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './components/Home/Home'
import Course from './components/Course'
import About from './components/About'
import Login from './components/Auth/Login'
import Signup from './components/Auth/Signup'


import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { NoMatch } from './components/NoMatch'
import './App.css'


const App = () => {
  return (
    <div id='App'>
      <BrowserRouter basename='/'>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/course' exact component={Course}/>
          <Route path='/login' exact component={Login}/>
          <Route path='/signup' exact component={Signup}/>
          <Route path='/about' exact component={About}/>
          <Route path='*' exact component={NoMatch}/>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
