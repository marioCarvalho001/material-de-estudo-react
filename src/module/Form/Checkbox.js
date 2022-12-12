import React from 'react'

const CheckBox = () => {

  const [termos, setTermos] = React.useState(false)
  const [cores, setCores] = React.useState(['vermelho'])

  function handChange({target}){
    if(target.checked){
      setCores([...cores, target.value])
    } else {
      setCores(cores.filter((cor) => cor !== target.value))
    }
    
  }

  function checkColor(cor){
    return cores.includes(cor)
  }

  return (
    <div>
      <form>
        <label>
          <input 
            type="checkbox"
            value='termos'
            checked={termos}
            onChange={({target}) => setTermos(target.checked)}
          />
          Aceito os termos
        </label>
        {termos && <p>Aceitou os termos</p>}
      </form>

    <form>
      <label>
        <input 
          type="checkbox"
          value='azul'
          checked={checkColor('azul')}
          onChange={handChange}
        />
        Azul
      </label>
      <label>
        <input 
          type="checkbox"
          value='vermelho'
          checked={checkColor('vermelho')}
          onChange={handChange}
        />
        Vermelho
      </label>
      {cores}
    </form>

    </div>
   
  )
}

export default CheckBox
