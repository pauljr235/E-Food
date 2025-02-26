class Restaurante {
  id: number
  capa: string
  titulo: string
  avaliacao: string
  destacado: boolean
  tipo: string
  descricao: string

  constructor(
    id: number,
    capa: string,
    titulo: string,
    avaliacao: string,
    destacado: boolean,
    tipo: string,
    descricao: string
  ) {
    this.id = id
    this.capa = capa
    this.titulo = titulo
    this.avaliacao = avaliacao
    this.destacado = destacado
    this.tipo = tipo
    this.descricao = descricao
  }
}

export default Restaurante
