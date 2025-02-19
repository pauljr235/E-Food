import pasta from '../../assets/images/massa.png'
import estrela from '../../assets/images/estrela.png'
import { TagContainer, Titulo, Descricao, Botao, Card, Rating } from './styles'
import { Link } from 'react-router-dom'

type Props = {
  image: string
  title: string
  rating: string
  destaque: string
  category: string
  description: string
}

const Products = ({
  image,
  title,
  rating,
  destaque,
  category,
  description
}: Props) => {
  return (
    <Card className="container">
      <img src={image} />
      <Titulo>
        <h3>{title}</h3>
        <Rating>
          {rating} <img src={estrela} alt="Estrela" />
        </Rating>
      </Titulo>
      <TagContainer style={{ marginRight: '100px' }}>{destaque}</TagContainer>
      <TagContainer>{category}</TagContainer>

      <Descricao>{description}</Descricao>
      <Link to={'/perfil'}>
        <Botao type="button">Saiba mais</Botao>
      </Link>
    </Card>
  )
}

export default Products
