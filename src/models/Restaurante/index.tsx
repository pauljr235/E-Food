import Prato from '../Prato'

class Restaurante {
  id: number
  capa: string
  titulo: string
  avaliacao: string
  destacado: boolean
  tipo: string
  descricao: string
  cardapio: Prato[]
  constructor(
    id: number,
    capa: string,
    titulo: string,
    avaliacao: string,
    destacado: boolean,
    tipo: string,
    descricao: string,
    cardapio: Prato[]
  ) {
    this.id = id
    this.capa = capa
    this.titulo = titulo
    this.avaliacao = avaliacao
    this.destacado = destacado
    this.tipo = tipo
    this.descricao = descricao
    this.cardapio = cardapio
  }
}

export default Restaurante
