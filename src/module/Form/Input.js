import React from 'react'

const Input = () => {
  const [form, setForm] = React.useState({
    nome: '',
    email: ''
  })

  function handSubmit(event){
    event.preventDefault();
    console.log(event);
  }

  function handChange({target}){
    const {id, value} = target
    console.log(id, value);
    setForm({ ...form, [id]: value })
  }

  return (
    <form onSubmit={handSubmit}>
      <label htmlFor='nome'>Nome</label>
      <input
        id='nome'
        type="text"
        value={form.nome}
        onChange= {handChange}
      />
   
   <label htmlFor='email'>Email</label>
      <input
        id='email'
        type="email"
        value={form.email}
        onChange= {handChange}
      />

      <button>Enviar</button>
    </form>
  )
}

export default Input
