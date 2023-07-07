import React from 'react'
import Home from './ReactApp/Home'
import SErvices from './ReactApp/SErvices'
import Contact from './ReactApp/Contact'
import About from './ReactApp/About'
import {Routes,Route} from 'react-router-dom';
import { Navigate } from 'react-router-dom'
import NavBar from './ReactApp/NavBar'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import './ReactApp/Website.css'
import Footer from './ReactApp/Footer'

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' Component={Home}></Route>
        <Route path='/services' Component={SErvices}></Route>
        <Route path='/about' Component={About}></Route>
        <Route path='/contact' Component={Contact}></Route>
        <Route path="/*" element={<Navigate to ="/" />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
