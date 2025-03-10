import { Link } from 'react-router-dom'
import { Imagem, Logo, Titulo } from './styles'
import headerImg from '../../assets/images/hero.png'
import logo from '../../assets/images/logo.png'

const Hero = () => (
  <>
    <Imagem style={{ backgroundImage: `url(${headerImg})` }}></Imagem>
    <div>
      <Link to="./">
        <Logo src={logo} alt="logo e-food"></Logo>
      </Link>
      <Titulo>
        Viva experiências gastronômicas <br /> no conforto de sua casa.
      </Titulo>
    </div>
  </>
)

export default Hero
