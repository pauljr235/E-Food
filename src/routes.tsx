import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import { GlobalCss } from './styles'
import Footer from './components/Footer'

import Home from './pages/Home'
import Perfil from './pages/Perfil'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/perfil" element={<Perfil />} />
  </Routes>
)

export default Rotas
