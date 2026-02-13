import { GlobalCss } from './styles'

import Header from './components/Header'
import ProductsList from './components/ProductsList'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const rotas = createBrowserRouter([
  {
    path: '/',
    element: <ProductsList/>
  }
])


function App() {
  return (
    <>
      <GlobalCss />
      <Header />
      <RouterProvider router={rotas}/>
    </>
  )
}

export default App
