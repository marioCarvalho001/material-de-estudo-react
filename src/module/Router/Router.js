import React from 'react'
import { BrowserRouter, Route, Routes, creteR } from 'react-router-dom'
import LinkRouter from './LinkRouter'
import Header from './pages/Header'
import Home from './pages/Home'
import Login from './pages/Login'
import NaoEncontrada from './pages/NaoEncontrada'
import Produto from './pages/Produto'
import Sobre from './pages/Sobre'

const Router = () => {
  return (
    <BrowserRouter>
    <Header />
      <LinkRouter  />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='sobre' element={<Sobre />} />
          <Route path='produto' element={<Produto />} />
          <Route path='login' element={<Login />} />
          <Route path='*' element={<NaoEncontrada />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
