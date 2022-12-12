import React from 'react'
import CheckBoxComp from '../Form/CheckBoxComp'

const AppCheckBox = () => {
  const [linguagem, setLinguagem] = React.useState([])
  const [termo, setTermo] = React.useState([])
  return (
    <form>
      <CheckBoxComp 
        options={['Li e aceito os termos']}
        value={termo}
        setValue={setTermo}
      />
      <h2>Termos</h2>
      <CheckBoxComp 
        options={['javascript','php', 'c#']}
        value={linguagem}
        setValue={setLinguagem}
      />
      {termo.length !== 0 && <p>Aceitou os termo</p>}
    </form>
  )
}

export default AppCheckBox
