export class Restaurant {
    image: string
    title: string
    rating: string
    description: string
    infos: string[]
    id: number

    constructor(
        image: string,
        title: string,
        rating: string,
        description: string,
        infos: string[],
        id: number
    ){
        this.image = image
        this.title = title
        this.rating = rating
        this.description = description
        this.infos = infos
        this.id = id
    }
}