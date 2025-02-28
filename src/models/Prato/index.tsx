class Prato {
  id: number
  foto: string
  nome: string
  descricao: string
  porcao: string
  preco: number

  constructor(
    id: number,
    foto: string,
    nome: string,
    descricao: string,
    porcao: string,
    preco: number
  ) {
    this.id = id
    this.foto = foto
    this.nome = nome
    this.descricao = descricao
    this.porcao = porcao
    this.preco = preco
  }
}

export default Prato
