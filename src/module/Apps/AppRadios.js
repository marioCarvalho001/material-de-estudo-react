import React from 'react'
import RadiosComp from '../Form/RadiosComp'

const AppRadios = () => {
  const [cor, setCor] = React.useState('');
  const [fruta, setFruta] = React.useState('');
  return (
    <form>
      <RadiosComp 
        options={['Azul', 'Vermelho']}
        value={cor}
        setValue={setCor}
      />
      <h2>Fruta</h2>
      <RadiosComp 
        options={['Limão', 'laraja','banana']}
        value={fruta}
        setValue={setFruta}
      />
    </form>
  )
}

export default AppRadios
