import { ButtonContainer } from '../Button/styles'
import { Card, Description, Imagem, Title } from './styles'

type Props = {
    image: string
    title: string
    description: string

}

const Dish = ({image, title, description}: Props) => (
    <Card>
        <Imagem src={image} alt={title} />
        <Title>{title}</Title>
        <Description>{description}</Description>
        <ButtonContainer title='Clique aqui para adicionar ao carrinho'>Adicionar ao carrinho</ButtonContainer>
    </Card>
)

export default Dish