import useAppContext from '../../context/AppContext'

const Cart = () => {
  //products

  const { delProduct, products } = useAppContext()

  console.log(products)

  const handleDel = (p) => {
    delProduct(p.id)
  }

  return (
    <div id='Cart'>
      {products.map((product) => (
        <>
          <h1 onClick={() => handleDel(product)}>{`${product.name} // cantidad: ${product.quantity}`}</h1>
        </>
      ))}
    </div>
  )
}

export default Cart
