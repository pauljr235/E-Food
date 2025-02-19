import Hero from '../../components/Hero'
import ProductList from '../../components/ProductList'
import Restaurante from '../../models/Restaurante'

import sushi from '../../assets/images/sushi.png'
import massa from '../../assets/images/massa.png'

const items: Restaurante[] = [
  {
    id: 1,
    image: sushi,
    title: 'Hioki Sushi ',
    rating: '4.9',
    destaque: 'Destaque da semana',
    category: 'Japonesa',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!'
  },
  {
    id: 2,
    image: massa,
    title: 'La Dolce Vita Trattoria ',
    rating: '4.6',
    destaque: '',
    category: 'Italiana',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    id: 3,
    image: massa,
    title: 'La Dolce Vita Trattoria ',
    rating: '4.6',
    destaque: '',
    category: 'Italiana',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    id: 4,
    image: massa,
    title: 'La Dolce Vita Trattoria ',
    rating: '4.6',
    destaque: '',
    category: 'Italiana',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    id: 5,
    image: massa,
    title: 'La Dolce Vita Trattoria ',
    rating: '4.6',
    destaque: '',
    category: 'Italiana',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    id: 6,
    image: massa,
    title: 'La Dolce Vita Trattoria ',
    rating: '4.6',
    destaque: '',
    category: 'Italiana',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  }
]
const Home = () => {
  return (
    <>
      <Hero />
      <ProductList restaurantes={items} />
    </>
  )
}

export default Home
