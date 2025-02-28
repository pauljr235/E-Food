import { useParams } from 'react-router-dom'
import Banner from '../../components/Banner'
import FoodList from '../../components/FoodList'
import Header from '../../components/Header'
import Prato from '../../models/Prato'

import { useEffect, useState } from 'react'

const Perfil = () => {
  const { id } = useParams()
  const [pratos, setPratos] = useState<Prato[]>([])

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((restaurantes) => {
        const todosOsPratos = restaurantes.cardapio.map(
          (prato: any) =>
            new Prato(
              prato.id,
              prato.foto,
              prato.nome,
              prato.descricao,
              prato.porcao,
              prato.preco
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
