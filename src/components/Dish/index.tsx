import pizza from '../../assets/images/image 3.png'
import { ButtonContainer } from '../Button/styles'
import { Card, Description, Imagem, Title } from './styles'

const Dish = () => (
    <Card>
        <Imagem src={pizza} alt="Imagem pizza" />
        <Title>Pizza Margarita</Title>
        <Description>A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!</Description>
        <ButtonContainer>Adicionar ao carrinho</ButtonContainer>
    </Card>
)

export default Dish