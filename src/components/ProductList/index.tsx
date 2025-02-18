import Products from '../Product'
import { List } from './styles'

const ProductList = () => (
  <div className="container">
    <List>
      <Products />
      <Products />
      <Products />
      <Products />
      <Products />
      <Products />
    </List>
  </div>
)

export default ProductList
