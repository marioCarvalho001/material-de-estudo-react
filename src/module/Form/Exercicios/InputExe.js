import React from 'react'

const InputExe = () => {

  const formFields = [
    {
      id:'nome',
      label: 'Nome',
      type: 'text'
    },
    {
      id:'email',
      label: 'Email',
      type: 'email'
    },
    {
      id:'senha',
      label: 'Senha',
      type: 'password'
    },
    {
      id:'cep',
      label: 'Cep',
      type: 'number'
    },
    {
      id:'rua',
      label: 'Rua',
      type: 'text'
    },
    {
      id:'numero',
      label: 'numero',
      type: 'number'
    },
    {
      id:'bairro',
      label: 'Bairro',
      type: 'text'
    },
    {
      id:'cidade',
      label: 'Cidade',
      type: 'text'
    },
    {
      id:'estado',
      label: 'Estado',
      type: 'text'
    },
  ]

  const [form, setForm] = React.useState(
    formFields.reduce((acc, field) => {
      return {
        ...acc,
        [field.id]: '',
      }
    }, {})
  ) 
  const [response, setResponse] = React.useState(null)
  function handSubmit(event){
    event.preventDefault();
    fetch('https://ranekapi.origamid.dev/json/api/usuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(form)
    }).then((response) => {
      setResponse(response)
      console.log(response)
    })
  }

  function handInput({target}){
    const {id, value} = target;

    setForm({...form, [id]:value})
  }

  return (
    <form onSubmit={handSubmit}>
      {
        formFields.map(
          ({id, label, type}) => 
          <div key={id}>
            <label htmlFor={id}>{label}</label>
            <input
              id={id}
              type={type}
              value={form[id]}
              onChange={handInput}
            />
          </div>
        )
      }
      
      <button>Enviar</button>
      {response && response.ok && <p>Form enviado</p>}
    </form>
  )
}

export default InputExe
