import React from 'react'
import { Globaldados } from './GlobalExe';


const Execicio = () => {
  const { dados } = React.useContext(Globaldados)
  if( dados == null) return null;
  const teste = dados.map(produto => <li key={produto.id}>{produto.nome}</li>)
  
  return (
    <div>
      {
        teste
      }
    </div>
  )
}

export default Execicio
