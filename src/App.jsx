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

// 00:00:00 ✔️ ItemDetailContainer con producto harcodeado.
// 00:05:00 ✔️ ItemDetail
// 00:09:00 ✔️ CartContext (o AppContext, como quieran llamarle) y fn añadir producto en array sin validación
// 00:20:00 ✔️ Cart listar productos
// 00:26:00 ✔️ Resolviendo problema de alumno (no veía producto, tenía mal nombre de atributo)
// 00:31:00 ✔️ Agregué 2 botones para simular 2 productos distintos. No tienen que hacer estom obviamente.
// 00:34:00 ✔️ ❗Importante❗ Validar si producto ya está en Carrito y agregar cantidad a existente
// 00:43:00 ✔️ ❗Importante❗ Agregar definición de métodos contar productos en carrito, importe total, vaciar carrito
// 00:47:00 ✔️ ❗Importante❗ Obtener cantidad de productos en carrito
// 00:55:00 ✔️ ❗Importante❗ Eliminar producto
// 01:02:00 ✔️ ❗Importante❗ Repaso de lo que hicimos en el contexto
// 01:05:00 ✔️ Consulta de alumno (usar onAdd al incrementar/decrementar en ItemCount)
// 01:11:00 ✔️ Consulta de alumno (mala implementación en añadir al carrito en context y manejo de cantidad)
// 01:30:00 ✔️ Consulta de alumno (2 componentes comparten un componente renderiza ambos. Solución: sacar ${count} de botón)
// 01:56:00 ✔️ Consulta de alumno (mala implementación en añadir al carrito en context)
