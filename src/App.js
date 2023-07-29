import './App.css';
import React from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './views/Home';
import NavbarScroll from './components/Nav';


export default function App() {

  return(
    <BrowserRouter>
      <NavbarScroll/>
      <Routes>
        <Route path='/' element={<Home/>}/>

      </Routes>
    </BrowserRouter>
  )
}

