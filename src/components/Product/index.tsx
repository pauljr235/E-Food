import sushi from '../../assets/images/sushi.png'
import estrela from '../../assets/images/estrela.png'

import { TagContainer, Titulo, Descricao, Botao, Card } from './styles'

const Products = () => (
  <Card className="container">
    <img src={sushi} alt="Uma peça de sushi" />
    <Titulo>
      Hioki Sushi
      <span>
        4.5
        <img src={estrela} alt="" />
      </span>
    </Titulo>
    <TagContainer>Destaque da semana</TagContainer>
    <TagContainer>Japonesa</TagContainer>
    <Descricao>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ea
      dignissimos esse? Aliquid veniam vel rerum assumenda nam a soluta quos
      quis, ea pariatur, quo cum totam quisquam dignissimos cupiditate.
    </Descricao>
    <Botao type="button">Saiba mais</Botao>
  </Card>
)

export default Products
