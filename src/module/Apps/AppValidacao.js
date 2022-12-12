import React from 'react'
import ValidationHook from '../CustomHooks/ValidationHook';
import InputComp from '../Form/InputComp'

const AppValidacao = () => {
  const cep = ValidationHook('cep')
  const email = ValidationHook('email')
  const nome = ValidationHook()
  const sobrenome = ValidationHook(false)

  function handSubmit(event){
    event.preventDefault();
    if(cep.validate() && nome.validate() && email.validate()){
      window.alert('Enviou')
    } else {
      window.alert('erro')
    }
  }
  return (
    <form onSubmit={handSubmit}>
      <InputComp 
          label="Nome" 
          id="nome" 
          type="text"
          {...nome}
        />
        <InputComp 
          label="SobreNome" 
          id="SobreNome" 
          type="text"
          {...sobrenome}
        />
      <InputComp 
          label="cep" 
          id="cep" 
          type="text" 
          placeholder="0000 - 000" 
          {...cep}
        />
        <InputComp 
          label="Email" 
          id="email" 
          type="email" 
          {...email}
        />
        <button>Enviar</button>
    </form>
  )
}

export default AppValidacao
