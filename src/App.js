import './App.css'
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer'
import { AppProvider } from './context/AppContext'
import Cart from './components/Cart/Cart'
import CartIcon from './components/CartIcon/CartIcon'

function App() {
  return (
    <AppProvider>
      <CartIcon />
      <ItemDetailContainer />
      <Cart />
    </AppProvider>
  )
}

export default App
