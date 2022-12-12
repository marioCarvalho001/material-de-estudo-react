import React from 'react'

const Radios = ({pergunta, options, onChange, value, id, active}) => {

  if(active === false) return null
  return (
    <fieldset>
      <legend>{pergunta}</legend>
      {options.map((option) => (
        <label key={option}>
          {option}
          <input 
            id={id}
            type='radio'
            checked={value === option}
            value={option}
            onChange={onChange}
          />
        </label>
      ))}
    </fieldset>
  )
}

export default Radios
