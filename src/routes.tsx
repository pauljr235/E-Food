import { Route, Routes } from "react-router-dom";
import Perfil from "./pages/Perfil";
import Home from "./pages/Home";

const Rotas = () => (
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path="/restaurante/:id" element={<Perfil />} />



  </Routes>
)

export default Rotas