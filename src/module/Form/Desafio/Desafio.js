import React from 'react'
import Radio from './Comp/Radio';



const Desafio = () => {
  const perguntas = [
    {
      pergunta: 'Qual método é utilizado para criar componentes?',
      options: [
        'React.makeComponent()',
        'React.createComponent()',
        'React.createElement()',
      ],
      resposta: 'React.createElement()',
      id: 'p1',
    },
    {
      pergunta: 'Como importamos um componente externo?',
      options: [
        'import Component from "./Component"',
        'require("./Component")',
        'import "./Component"',
      ],
      resposta: 'import Component from "./Component"',
      id: 'p2',
    },
    {
      pergunta: 'Qual hook não é nativo?',
      options: ['useEffect()', 'useFetch()', 'useCallback()'],
      resposta: 'useFetch()',
      id: 'p3',
    },
    {
      pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
      options: ['set', 'get', 'use'],
      resposta: 'use',
      id: 'p4',
    },
  ];
  
  const [respostas, setResposta] = React.useState({
    p1:'',
    p2:'',
    p3:'',
    p4:'',
  })
  const [slide, setSlide] = React.useState(0);
  const [resul, setResul] = React.useState(null);

  function handChange({ target }){
    setResposta({...respostas, [target.id]: target.value })
  }

  function resultado(){
    const corretas = perguntas.filter(({id, resposta}) => respostas[id] === resposta)

    setResul(`você acertou ${corretas.length} de ${perguntas.length}`)
    console.log(corretas);
  }

  function handClick(){
    if(slide < perguntas.length -1){
      setSlide(slide + 1)
    } else {
      setSlide(slide + 1)
      resultado()
    }
    
  }

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      {perguntas.map((pergunta, index) => (
        <Radio 
          active={slide === index}
          onChange={handChange}
          key={pergunta.id} 
          value={respostas[pergunta.id]}
          {...pergunta}
        />
      ))} 
      {resul ? <p>{resul}</p> : <button onClick={handClick}>Enviar</button>}
      
    </form>
  )
}

export default Desafio
