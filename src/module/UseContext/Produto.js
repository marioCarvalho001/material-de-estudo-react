import React from 'react'
import { GlobalContext } from './GlobalContext'

const Produto = () => {

  const {contar, contaUm} = React.useContext(GlobalContext)
  console.log(contar);
  return (
    <div>
      Produto: {contar}
      <button onClick={() => contaUm()}>Produto</button>
    </div>
  )
}

export default Produto
