import React from 'react'
import { Globaldados } from './GlobalExe';

const Limp = () => {
  const { dadosLim } = React.useContext(Globaldados)
  return (
    <button onClick={dadosLim}>
      Click
    </button>
  )
}

export default Limp
