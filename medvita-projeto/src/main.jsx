import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './templates/Home'
import './styles/globalStyle.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './templates/Login';
import GlobalUserContext from './contexts/UserGlobalContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <GlobalUserContext>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  </GlobalUserContext>
)
