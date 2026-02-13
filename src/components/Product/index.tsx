import sushi from '../../assets/images/sushi.png'
import estrela from '../../assets/images/estrela.png'
import { Card, CardInfo, Container, Descricao, Imagem, Infos, Ratings, Titulo } from './styles'
import { ButtonLink } from '../Button/styles'
import Tag from '../Tag'

type Props = {
    image: string
    title: string
    rating: string
    description: string
    infos: string[]
}


const Product = ({image, title, rating, description, infos}: Props) => (
    <Card>
        <Imagem src={image} alt={title} />
        <Infos>
            {infos.map((info) => (
                <Tag key={info}>{info}</Tag>
            ))}
        </Infos>
    <Container className='container'>
        <CardInfo>
            <Titulo>{title}</Titulo>
            <Ratings>
                <p>{rating}</p>
                <img src={estrela} alt="Estrela" />
            </Ratings>
        </CardInfo>
        <Descricao>{description}</Descricao>
        <ButtonLink type='link' to='/product' title='Clique aqui para saber mais'>Saiba mais</ButtonLink>
    </Container>
    </Card>
)

export default Product