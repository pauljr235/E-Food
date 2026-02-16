import bannerImg from '../../assets/images/massa.png'
import { BannerContainer, Name, Title } from './styles'

const Banner = () => (
    <BannerContainer style={{ backgroundImage: `url(${bannerImg})` }}>
        <div className='container'>
            <Title>Italiana</Title>
            <Name>La Dolce Vita Trattoria</Name>
        </div>
    </BannerContainer>
)

export default Banner