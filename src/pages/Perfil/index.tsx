import Banner from '../../components/Banner'
import FoodList from '../../components/FoodList'
import Header from '../../components/Header'
import Prato from '../../models/Prato'

import { useEffect, useState } from 'react'

const Perfil = () => {
  const [pratos, setPratos] = useState<Prato[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((restaurantes) => {
        // Extraindo os pratos de todos os restaurantes
        const todosOsPratos = restaurantes.flatMap((restaurante: any) =>
          restaurante.cardapio.map(
            (prato: any) =>
              new Prato(prato.id, prato.foto, prato.nome, prato.descricao)
          )
        )
        setPratos(todosOsPratos)
      })
  }, [])

  return (
    <>
      <Header />
      <Banner />
      <FoodList pratos={pratos} />
    </>
  )
}

export default Perfil
