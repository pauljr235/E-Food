import logo from '../../assets/images/logo.png'
import fundo from '../../assets/images/fundo.png'
import { HeaderContainer } from './styles'
import { Link } from 'react-router-dom'

const HeaderPerfil = () => (
    <HeaderContainer style={{backgroundImage: `url(${fundo})`}}>
        <div className='container'>
            <Link to='/'>Restaurantes</Link>
            <Link to='/'>
            <img src={logo} alt="Logo E-food" /> 
            </Link>
            <p>0 produto(s) no carrinho</p>
        </div>
    </HeaderContainer>
)

export default HeaderPerfil

