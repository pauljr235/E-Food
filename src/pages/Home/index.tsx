import Hero from '../../components/Hero'
import ProductList from '../../components/ProductList'
import Restaurante from '../../models/Restaurante'

import { useEffect, useState } from 'react'

const Home = () => {
  const [restaurantes, setRestaurantes] = useState<Restaurante[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurantes(res))
  }, [])

  return (
    <>
      <Hero />
      <ProductList restaurantes={restaurantes} />
    </>
  )
}

export default Home
