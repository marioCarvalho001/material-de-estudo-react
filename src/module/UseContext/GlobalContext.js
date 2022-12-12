import React from 'react'

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [contar, setContar] = React.useState(0)
  function contaUm(){
    setContar((f) => f + 2)
  }
  return (
    <GlobalContext.Provider value={{contar, contaUm}}>
    {
      children
    }
  </GlobalContext.Provider>
  )
  
}