import React from 'react'

const coresArray = ['azul', 'roxo', 'laranja', 'verde', 'vermelho', 'cinza'];
const CheckboxExe = () => {

  const [cores, setCores] = React.useState([])

  function checked(cor){
    return cores.includes(cor)
  }
  
  function handChange({ target }){
    if(target.checked){
      setCores([...cores, target.value])
    } else {
      setCores(cores.filter((cor) => cor !== target.value))
    }
  }
  return (
    <form>
      {
        coresArray.map( (cor, index) => 
          <label key={index} style={{textTransform: 'capitalize'}}>
          <input 
            type="checkbox"
            value={cor}
            checked={checked(cor)}
            onChange={handChange}
          />
          {cor}
        </label>
        )
      }
      {cores}
    </form>
  )
}

export default CheckboxExe
