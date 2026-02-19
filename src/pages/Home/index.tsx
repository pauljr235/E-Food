import ProductsList from "../../components/ProductsList";

import Header from "../../components/Header";
import { useEffect, useState } from "react";



export type CardapioItem = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type Restaurant = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: CardapioItem[]
}


const Home = () => {
    const [produtos, setProdutos] = useState<Restaurant[]>([])

useEffect(() => {
  fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
    .then(res => res.json())
    .then(resJson => setProdutos(resJson))
}, [])



    return(
    <>
    <Header/>
    <ProductsList restaurants={produtos}/>
    </> 
    )
}


export default Home