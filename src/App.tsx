import { GlobalCss } from './styles'

import Header from './components/Header'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Perfil from './pages/Perfil'
import HeaderPerfil from './components/HeaderPerfil'


const rotas = createBrowserRouter([
  {
    path: '/',
    element: (
      
      <Home/>
    )
  },
  {
    path: '/perfil',
    element: (
        <Perfil/>
    ) 
  }
])


function App() {
  return (
    <>
      <GlobalCss />
      <RouterProvider router={rotas}/>
    </>
  )
}

export default App
