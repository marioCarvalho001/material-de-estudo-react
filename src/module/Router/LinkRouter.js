import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'

const LinkRouter = () => {
  return (
    <nav  >
      {/* <Link to="/">Home </Link> 
       | 
      <Link to="sobre">Sobre </Link> */}
      <NavLink activeStyle={{color: 'red'}}  to='/' end>Home</NavLink>
      {' '}
      <NavLink to='sobre'>Sobre</NavLink>
      {' '}
      <NavLink to='produto'>Produto</NavLink>
      <NavLink to='login'>Login</NavLink>
    </nav>
  )
}

export default LinkRouter
