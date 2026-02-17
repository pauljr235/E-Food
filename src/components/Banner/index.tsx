import { BannerContainer, Name, Title } from './styles'

type Props = {
    image: string
    type: string
    name: string
}

const Banner = ({type, name, image}: Props) => (
    <BannerContainer style={{ backgroundImage: `url(${image})` }}>
        <div className='container'>
            <Title>{type}</Title>
            <Name>{name}</Name>
        </div>
    </BannerContainer>
)

export default Banner