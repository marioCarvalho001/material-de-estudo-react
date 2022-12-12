import React from 'react'

const UseRef = () => {
    const [carrinho, setCarrinho] = React.useState(1)
    const [notificacao, setNotificacao] = React.useState(null)
    const notfic = React.useRef(null)
  
    function handClick(){
      setCarrinho(carrinho + 1)
  
      setNotificacao('Item adicionado')
      clearTimeout(notfic.current)
      notfic.current = setTimeout(()=>{
        setNotificacao(null)
        console.log('t');
      }, 3000)
    }
  return (
    <div>
      <p ref={notfic}>{notificacao}</p>
      <button onClick={handClick}>
        Adicionar carrinho {carrinho}
      </button>
    </div>  
  )
}

export default UseRef
