import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const ProdutoDin = () => {
  //Use para fazer um fetch e passar o valor na url ex :url/bla/{Param.id}

  const param = useParams()
  const location = useLocation()
  const search = new URLSearchParams(location.search)
  console.log(search.get('q'));
  return (
    <div>
      <h1>Produto: {param.id}</h1>
    </div>
  )
}

export default ProdutoDin
