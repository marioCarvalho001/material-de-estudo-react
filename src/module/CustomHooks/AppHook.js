import React from 'react'
import UseFetch from './module/CustomHooks/useFetch'

const App = () => {
  let {request, data, loading, error} = UseFetch()

  React.useEffect(() => {
    async function fetchData(){
      const {response, json} = await request('https://ranekapi.origamid.dev/json/api/produto/')
      console.log(response);
      console.log(json);
    }
    fetchData()
  },[])

  if(error) return <p>{error}</p>
  if(loading) return <p>carregando...</p>
  if(data ) 
  
  return (
    <div>
      <ul>
      {data.map(({ nome, preco }) => (
        <li key={preco}>
          <p>{ nome }</p>
          <p>{ preco }</p>
        </li>
      ))}
      </ul>  
    </div>
  )
  else return null
}

export default App
