import React from 'react'

const RadiosComp = ({ options, value, setValue }) => {
  return (
    <>
      {
        options.map((radio) => (
          <label key={radio}>
            <input 
              type='radio'
              value={radio}
              checked={value === radio}
              onChange={({target}) => setValue(target.value)}
            />
            {radio}
          </label>
        ))
      }
    </>
  )
}

export default RadiosComp
