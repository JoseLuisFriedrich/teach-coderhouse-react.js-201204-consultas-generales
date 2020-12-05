import { useState } from 'react'
import useAppContext from '../../context/AppContext'

const ItemDetail = ({ product }) => {
  const [quantity] = useState(1)
  // , setQuantity

  const { addProduct } = useAppContext()
  //const ctx = useAppContext()

  // const handleCounter = (counter) => {
  //   setQuantity(counter)
  //   // console.log(counter)
  // }

  const addProductToCart1 = () => {
    addProduct({ id: 1, name: 'product1' }, quantity)
    //ctx.AddProduct
  }

  const addProductToCart2 = () => {
    addProduct({ id: 2, name: 'product2' }, quantity)
  }

  return (
    <div id='ItemDetail'>
      <h2>ItemDetail</h2>

      <button onClick={addProductToCart1}>añadir al carrito 1</button>
      <button onClick={addProductToCart2}>añadir al carrito 2</button>

      {/* <ItemCount onAdd={handleCounter} */}
    </div>
  )
}

export default ItemDetail
