import logo from '../../assets/images/logo.png'
import fb from '../../assets/images/fb.png'
import twiter from '../../assets/images/twiter.png'
import instagram from '../../assets/images/instagram.png'
import { FooterContainer, FooterDescription, SocialMedia } from './styles'


const Footer = () => (
    <FooterContainer>
        <div className='container'>
        <img src={logo} alt="Logo E-food" />
        <SocialMedia>
            <a href="/">
                <img src={instagram} alt="Logo fb" />
            </a>
            <a href="/">
                <img src={fb} alt="Logo twiter" />
            </a>
            <a href="/">
                <img src={twiter} alt="Logo instagram" />
            </a>
        </SocialMedia>
        <FooterDescription>A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade <br /> dos produtos é toda do estabelecimento contratado. </FooterDescription>
        </div>
    </FooterContainer>
)

export default Footer