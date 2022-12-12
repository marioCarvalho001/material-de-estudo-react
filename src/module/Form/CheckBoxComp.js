import React from 'react'

const CheckBoxComp = ({options, value, setValue}) => {

  function handChange({target}){
    if(target.checked){
      setValue([...value, target.value])
    } else {
      setValue(value.filter((itenValue) => itenValue !== target.value))
    }
  }

  return (
    <>
      {
        options.map((option) => (
          <label key={option}>
            <input 
              type='checkbox' 
              value={option}
              checked={value.includes(option)}
              onChange={handChange}
            />
            {option}
          </label>
        ))
      }
    </>
  )
}

export default CheckBoxComp
