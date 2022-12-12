import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const Header = () => {
  const location = useLocation();
  React.useEffect(() => {
    //pode ser usado no google analitcs
    console.log('ok');
  }, [location])
  return (
    <div>
      Esse é o Header
      <NavLink to="produto/notebook">Notebook</NavLink>
      {' | '}
      <NavLink to="produto/smartphone">Smartphone</NavLink>
      
    </div>
  )
}

export default Header
