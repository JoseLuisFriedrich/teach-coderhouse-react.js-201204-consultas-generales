import { useState } from 'react'
import ItemDetail from '../../components/ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
  //useParam
  const [product] = useState({ id: 1, name: 'producto1' })

  return (
    <div id='ItemDetailContainer'>
      <ItemDetail product={product} />
    </div>
  )
}

export default ItemDetailContainer
