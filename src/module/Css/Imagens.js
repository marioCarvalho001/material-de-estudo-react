import React from 'react'
import './Styles/imgs.css'
import foto from './Styles/img/cachorro.webp'
import { ReactComponent as Fishe } from './Styles/img/iconmonstr-fish-1.svg'
import Svg from './Svg'

const Imagens = () => {
  const [widt, setWidt] = React.useState(15)
  return (
    <div>
      <Fishe />
      <Svg widt={widt} />
      <img className='img' src={foto} alt="dog" />
      <div className='imgBack'></div>
      <button onClick={() => {setWidt(widt + 10)}} >Aumentar</button>
    </div>
  )
}

export default Imagens
