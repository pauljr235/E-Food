import Products from '../Product'
import { List } from './styles'

import Restaurante from '../../models/Restaurante'

type ProductProps = {
  restaurantes: Restaurante[]
}

const ProductList = ({ restaurantes }: ProductProps) => (
  <div className="container">
    <List>
      {restaurantes.map((restaurante) => (
        <Products
          key={restaurante.id}
          image={restaurante.image}
          title={restaurante.title}
          rating={restaurante.rating}
          destaque={restaurante.destaque}
          category={restaurante.category}
          description={restaurante.description}
        />
      ))}
    </List>
  </div>
)

export default ProductList
