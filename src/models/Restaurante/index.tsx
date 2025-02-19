class Restaurante {
  id: number
  image: string
  title: string
  rating: string
  destaque: string
  category: string
  description: string

  constructor(
    id: number,
    image: string,
    title: string,
    rating: string,
    destaque: string,
    category: string,
    description: string
  ) {
    this.id = id
    this.image = image
    this.title = title
    this.rating = rating
    this.destaque = destaque
    this.category = category
    this.description = description
  }
}

export default Restaurante
