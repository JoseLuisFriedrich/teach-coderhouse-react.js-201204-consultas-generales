import useAppContext from '../../context/AppContext'

const CartIcon = () => {
  const { productsCount } = useAppContext()

  return (
    <div id='CartIcon'>
      <h2>CartIcon {productsCount()}</h2>
    </div>
  )
}

export default CartIcon
