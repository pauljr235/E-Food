import logo from '../../assets/images/logo.png'
import fundo from '../../assets/images/fundo.png'
import { HeaderContainer } from './styles'

const HeaderPerfil = () => (
    <HeaderContainer style={{backgroundImage: `url(${fundo})`}}>
        <div className='container'>
            <a href="/">Restaurantes</a>
            <img src={logo} alt="Logo E-food" />
            <p>0 produto(s) no carrinho</p>
        </div>
    </HeaderContainer>
)

export default HeaderPerfil

