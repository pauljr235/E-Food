import Food from '../Food'
import { Lista } from './styles'
import Prato from '../../models/Prato'

type FoodProps = {
  pratos: Prato[]
}

const FoodList = ({ pratos }: FoodProps) => (
  <div className="container">
    <Lista>
      {pratos.map((prato) => (
        <Food
          key={prato.id}
          image={prato.foto}
          title={prato.nome}
          description={prato.descricao}
        />
      ))}
    </Lista>
  </div>
)

export default FoodList
