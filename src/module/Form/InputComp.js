import React from 'react'

const InputComp = ({label, id, setValue, value, type, onBlur, placeholder, onChange, error}) => {
  return (
    <>
      <label htmlFor={id}>{ label }</label>
      <input 
        id={id}
        name={id}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        onBlur={onBlur}
        value={value}
      />
      {error && <p>{error}</p>} 
    </>
  )
}

export default InputComp
