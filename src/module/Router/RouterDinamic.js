import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './pages/Header'
import ProdutoDin from './RoutersDinamic.js/ProdutoDin'

const RouterDinamic = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        
        <Route path='produto/:id' element={<ProdutoDin />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouterDinamic
