import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Nav from './sections/Nav'
import Home from './pages/Home'
import Login from './pages/Login'
import About from './pages/About';

function App() {

  return (
    <>
    <Nav/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>} />  
      <Route path='/About' element={<About/>} /> 
    </Routes>
    

    </>
  )
}

export default App
