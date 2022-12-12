import React from 'react'

const Select = () => {
  const [select, setSelect] = React.useState('');
  return (
    <form>
      <select 
        id="produtos" 
        value={select}
        onChange={({target}) => {
          setSelect(target.value)
        }}
        >
        <option value='' disabled >Selecione</option>
        <option value='notebook' >Notebook</option>
        <option value='smatphone' >Smatphone</option>
        <option value='tablet' >Tablet</option>
      </select>
      {select}
    </form>
  )
}

export default Select
