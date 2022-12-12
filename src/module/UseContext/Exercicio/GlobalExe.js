import React from 'react'

//Conteudo que vai varregar o valor para criação createContext para usi usecontext
export const Globaldados = React.createContext()

export const GlobalExercicio = ({ children }) => {
  const [dados, setDados] = React.useState(null)

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto/').then(Response => Response.json()).then(json => setDados(json))
  },[])

  function dadosLim(){
    setDados(null)
  }
  console.log(children);
  return (
    <Globaldados.Provider value={{ dados, dadosLim }}>
      {
        children
      }
    </Globaldados.Provider>
  )
}
