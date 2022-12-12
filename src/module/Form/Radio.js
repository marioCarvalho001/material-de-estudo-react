import React from 'react'

const Radio = () => {

  const [radio, setRadio] = React.useState('')

  function handleChange({target}){
    setRadio(target.value)
  }
  return (
    <form>
      <h2>Cores</h2>
      <label>
        <input 
          type="radio"
          value="rosa"
          name='cor'
        />
        Rosa
      </label>
      <label>
        <input 
          type="radio"
          value="vermelho"
          name='cor'
        />
        Vermelho
      </label>
      <h2>Produtos</h2>
      <label>
        <input 
          type="radio"
          value="notebook"
          checked={radio == "notebook"}
          onChange={handleChange}
        />
        Notebook
      </label>
      <label>
        <input 
          type="radio"
          value="tablet"
          checked={radio == "tablet"}
          onChange={handleChange}
        />
        Tablet
      </label>
      
    </form>
  )
}

export default Radio
