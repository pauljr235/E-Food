import Banner from '../../components/Banner'
import FoodList from '../../components/FoodList'
import Header from '../../components/Header'
import Prato from '../../models/Prato'

import pizza from '../../assets/images/image 3.png'

const items: Prato[] = [
  {
    id: 1,
    image: pizza,
    title: 'Pizza Marguerita ',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 1,
    image: pizza,
    title: 'Pizza Marguerita ',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 1,
    image: pizza,
    title: 'Pizza Marguerita ',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 1,
    image: pizza,
    title: 'Pizza Marguerita ',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 1,
    image: pizza,
    title: 'Pizza Marguerita ',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 1,
    image: pizza,
    title: 'Pizza Marguerita ',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  }
]

const Perfil = () => (
  <>
    <Header />
    <Banner />
    <FoodList pratos={items} />
  </>
)

export default Perfil
