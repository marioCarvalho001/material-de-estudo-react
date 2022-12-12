import React from 'react'
import InputComp from '../Form/InputComp';

const AppInput = () => {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  
  return (
    <form>
      <InputComp id="nome" label="Nome" value={nome} setValue={setNome} />
      <InputComp id="email" label="Email" value={email} setValue={setEmail} required/>

      <button>Enviar</button>
    </form>
  )
}

export default AppInput
