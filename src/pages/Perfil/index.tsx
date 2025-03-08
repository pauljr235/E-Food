import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Banner from '../../components/Banner'
import FoodList from '../../components/FoodList'
import Header from '../../components/Header'
import Prato from '../../models/Prato'
import Restaurante from '../../models/Restaurante'

const Perfil = () => {
  const { id } = useParams() // Identifica o restaurante através do id

  const [pratos, setPratos] = useState<Prato[]>([])
  const [restaurante, setRestaurante] = useState<Restaurante | null>(null)

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((restaurante) => {
        const todosOsPratos = restaurante.cardapio.map(
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

        setRestaurante(restaurante)
        setPratos(todosOsPratos)
      })
  }, [])

  if (!restaurante) {
    return <p>Carregando...</p> // Evita erro se os dados ainda não foram carregados
  }

  return (
    <>
      <Header />
      <Banner
        capa={restaurante.capa}
        tipo={restaurante.tipo}
        nome={restaurante.titulo}
      />
      <FoodList pratos={pratos} />
    </>
  )
}

export default Perfil
