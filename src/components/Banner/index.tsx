import massa from '../../assets/images/massa.png'
import { ImagemHero, TituloHero, Italiana } from './styles'

export const Banner = () => (
  <>
    <ImagemHero style={{ backgroundImage: `url(${massa})` }}></ImagemHero>
    <div>
      <Italiana>Italiana</Italiana>
      <TituloHero>Restaurante aleaotiro</TituloHero>
    </div>
  </>
)

export default Banner
