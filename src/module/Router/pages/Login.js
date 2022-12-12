import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const Nav = useNavigate()
  
  function handclick(){
   Nav('/sobre')
  }

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handclick}>Login</button>
    </div>
  )
}

export default Login
