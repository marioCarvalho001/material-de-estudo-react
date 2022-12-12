import React from 'react'
import style from './Styles/Slide.module.css'

const Slide = ({slide}) => {
  const [active, setActive] = React.useState(0)
  const [position, setPosition] = React.useState(0)
  const contentRef = React.useRef()

  React.useEffect(() => {
    const { width } = contentRef.current.getBoundingClientRect()
    setPosition( -(width * active))
  }, [active])

  function slidePrev(){
    if(active > 0){
      setActive(active - 1)
    }
    
  }
  function slideNext(){
    if(active < slide.length - 1){
      setActive(active + 1)
    }
    
  }

  return (
    <section className={style.container}>
      <div ref={contentRef} className={style.content} style={{transform: `translateX(${position}px)`}}>
        {
          slide.map(({id, text}) => (
            <section className={style.item} key={id}>
              <p>{text}</p>
            </section>
          ))
        }
      </div>
      <nav className={style.nav}>
        <button onClick={slidePrev}>Anterior</button>
        <button onClick={slideNext}>Próximo</button>
      </nav>
    </section>
  )
}

export default Slide
