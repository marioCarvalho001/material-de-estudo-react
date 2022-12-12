import React from 'react'

const TextArea = () => {
  const [textarea, setTextArea] = React.useState('')
  return (
    <form>
      < textarea
       value={textarea}
       onChange={({target})=>{ setTextArea(target.value) }}
       rows="5"
      />
      {textarea}
    </form>
  )
}

export default TextArea
