import React from 'react'

const types = {
  cep:{
    regex: /^\d{5}-?\d{3}$/,
    message: 'Cep inválido'
  },
  email:{
    regex: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
    message: 'Email inválido'
  }
}

const ValidationHook = (type) => {
  const [value, setValue] = React.useState('')
  const [error, setError] = React.useState(null)

  function validate(value){
    if(type === false) return true;
    if(value.length === 0){
      setError('Preencha um Valor')
      return false
    } else if(types[type] && !types[type].regex.test(value)){
      setError(types[type].message)
      return false
    } else {
      setError(false)
      return true
    } 
  }

  function onChange({ target }){
    if(error) validate(target.value);
    setValue(target.value)
  }

  return {
    value,
    setValue,
    onChange,
    error,
    onBlur: () => validate(value),
    validate: () => validate(value)
  }
}

export default ValidationHook
