import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Principal from './components/principal'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Pass from './components/Pass'
import LeftColumn from "./components/LeftColumn";
import Navbar from "./components/Navbar";
import RightColumn from "./components/RightColumn";
import F from './F'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' Component={Principal}/>
          <Route exact path='/login' Component={Login}/>
          <Route exact path='/register' Component={Register}/>
          <Route exact path='/pass' Component={Pass}/>
          <Route exact path='/pass' Component={Pass}/>
          <Route exact path='/f' Component={F}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
