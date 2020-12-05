import { createContext, useContext, useState } from 'react'

const AppContext = createContext()
const useAppContext = () => useContext(AppContext)

export const AppProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  // const [productsQuantity, setproductsQuantity] = useState(0)

  const addProduct = (product, quantity) => {
    //Buscar en array si existe
    const existing = products.find((p) => p.id === product.id)
    if (existing) {
      //Sumo cantidad a uno existente
      existing.quantity += quantity
      setProducts([...products])
      // setproductsQuantity(quantity)
    } else {
      //Agregar uno nuevo
      setProducts([...products, { ...product, quantity }])
      // setproductsQuantity(quantity)
    }
  }

  //get productCount
  const productsCount = () => {
    //foreach, map, for()
    return products.reduce((acc, p) => (acc += p.quantity), 0)
  }

  //Eliminar un item del arra
  const delProduct = (id) => {
    products.splice(
      products.findIndex((p) => p.id === id),
      1
    )
    setProducts([...products])
  }

  //Importe total
  const getGrandTotal = () => {
    // return products.reduce((acc, p) => (acc += p.price), 0)
  }

  //Editar cantidad id

  //Variar Carrito
  //setProducts([])

  return <AppContext.Provider value={{ productsCount, products, addProduct, delProduct, getGrandTotal }}>{children}</AppContext.Provider>
}

export default useAppContext
