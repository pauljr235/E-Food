import { HeaderContainer, Title } from "./styles"

import fundo from '../../assets/images/fundo.png'
import logo from '../../assets/images/logo.png'

const Header = () => (
    <HeaderContainer style={{backgroundImage: `url(${fundo})`}}>
        <div>
            <img src={logo} alt="Logo Ifood" />
        </div>
        <Title>Viva experiências gastronômicas <br /> no conforto da sua casa</Title>
    </HeaderContainer>
)

export default Header