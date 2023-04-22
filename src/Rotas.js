import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

const Rotas = () => {
    return (
        <BrowserRouter>
             <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/Register" element={<Register/>} />
                <Route path="/Home" element={<Home/>} />
             </Routes>  
        </BrowserRouter>
    )
  }

export default Rotas;