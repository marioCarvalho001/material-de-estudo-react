import React from 'react'
//Rezerva uma local para guarda dados na memoria e não ser renderizado novamente quando o app for recarregado

function operacaoLenta(){
  let c;
  for (let i = 0; i < 100000000; i++){
    c = i+i / 10;
  }
  return c;
}

const UseMemo = () => {
  const [contar , setContar ] = React.useState(0)
  const t1 = performance.now()
  const valor = React.useMemo(() => operacaoLenta(), [])
  console.log(valor);
  console.log(performance.now() - t1);
  return (
    <div>
      <p>{valor}</p>
      <button onClick={() => setContar(contar + 1)} >{contar}</button>
    </div>
  )
}

export default UseMemo
