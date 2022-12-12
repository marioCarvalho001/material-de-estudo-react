import React from 'react'

  const Produto = () => {
    const set1 = new Set()
    const set2 = new Set()

    const func1 = () => {
      console.log('Teste');
    }
    const func2 = React.useCallback(() => {
      console.log('Teste');
    }, [])

    set1.add(func1)
    set1.add(func2)

    console.log(set1);
    console.log(set2);

    return <div>
      <p onClick={func1}>Produto 1</p>
      <p onClick={func2}>Produto 2</p>
    </div>
  }

const UseCallback = () => {
  const [contar, setContar] = React.useState(0)
  const handClick = React.useCallback(() => {
    //esta fazendo referencia ao valor antigo de setContar, para não ter que por a dependencia entre os colchetes
    setContar((f) => f + 1)
  },[]) 

  return (
    <div>
      < Produto />
      <button onClick={() => setContar((f) => f + 1)}>{contar}</button>
    </div>
  )
}

export default UseCallback
