import './App.css';
import React from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './views/Home';


export default function App() {

  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>

      </Routes>
    </BrowserRouter>
  )
}

