import './App.css';
import React from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './views/Home';
import NavbarScroll from './components/Nav';
import SignUp from './views/SignUp';
import SignIn from './views/SignIn';
import PlantData from './views/PlantData';
import PlantSearch from './views/PlantSearch'

export default function App() {

  return(
    <BrowserRouter>
      <NavbarScroll/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/plantdata' element={<PlantData/>}/>
        <Route path='/plantsearch' element={<PlantSearch/>}/>
      </Routes>
    </BrowserRouter>
  )
}

