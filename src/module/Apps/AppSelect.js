import React from 'react'
import SelectComp from '../Form/SelectComp'

const AppSelect = () => {

  const [produto, setProduto] = React.useState('')
  return (
    <form>
      < SelectComp value={produto} setValue={setProduto} options={['smatphone', 'tablet']} />
    </form>
  )
}

export default AppSelect
