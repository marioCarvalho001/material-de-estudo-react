import React from 'react'
import './Styles/Produto.css'
import Produto from './Produto'


const CssImport = () => {
  const [ativar, setAtivar] = React.useState(false)
  return (
    <div>
      <button 
      onClick={() => {setAtivar(!ativar)}}>Ativar</button>
      {ativar && <Produto />}
    </div>
  )
}

export default CssImport
