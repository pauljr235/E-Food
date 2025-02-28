import estrela from '../../assets/images/estrela.png'
import { TagContainer, Titulo, Descricao, Botao, Card, Rating } from './styles'
import { Link } from 'react-router-dom'

type Props = {
  id: number
  image: string
  title: string
  rating: string
  destacado: boolean
  category: string
  description: string
}

const Products = ({
  id,
  image,
  title,
  rating,
  destacado,
  category,
  description
}: Props) => {
  return (
    <Card className="container" key={id}>
      <img src={image} />
      <Titulo>
        <h3>{title}</h3>
        <Rating>
          {rating} <img src={estrela} alt="Estrela" />
        </Rating>
      </Titulo>
      {destacado && (
        <TagContainer style={{ marginRight: '100px' }}>
          Destaque da Semana{destacado}
        </TagContainer>
      )}

      <TagContainer>{category}</TagContainer>

      <Descricao>{description}</Descricao>
      <Link to={`/perfil/${id}`}>
        <Botao type="button">Saiba mais</Botao>
      </Link>
    </Card>
  )
}

export default Products
