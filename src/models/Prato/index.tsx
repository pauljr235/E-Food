class Prato {
  id: number
  foto: string
  nome: string
  descricao: string

  constructor(id: number, foto: string, nome: string, descricao: string) {
    this.id = id
    this.foto = foto
    this.nome = nome
    this.descricao = descricao
  }
}

export default Prato
