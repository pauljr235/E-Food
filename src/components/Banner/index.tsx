import { ImagemHero, TituloHero, Italiana } from './styles'

export type PropsBanner = {
  capa: string
  tipo: string
  nome: string
}

const Banner = ({ capa, tipo, nome }: PropsBanner) => (
  <>
    <ImagemHero style={{ backgroundImage: `url(${capa})` }}></ImagemHero>
    <div>
      <Italiana>{tipo}</Italiana>
      <TituloHero>{nome}</TituloHero>
    </div>
  </>
)

export default Banner
