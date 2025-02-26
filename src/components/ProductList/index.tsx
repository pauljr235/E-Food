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
          image={restaurante.capa}
          title={restaurante.titulo}
          rating={restaurante.avaliacao}
          destacado={restaurante.destacado}
          category={restaurante.tipo}
          description={restaurante.descricao}
        />
      ))}
    </List>
  </div>
)

export default ProductList
