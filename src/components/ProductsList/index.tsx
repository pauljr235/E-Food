
import { Restaurant } from "../../pages/Home";
import Product from "../Product";
import { List } from "./styles";

type Props = {
    restaurants: Restaurant[]
}

const ProductsList = ({restaurants}: Props) => {

    const getRestaurantTags = (restaurant:Restaurant) => {
        const tags = []

        if(restaurant.destacado){
            tags.push('Destaque da Semana')
        }
        if(restaurant.tipo){
            tags.push(restaurant.tipo)
        }

        return tags
    }
    

    return(
    <div className="container">
        <List>
            {restaurants.map((restaurant) =>(
                <Product
                key={restaurant.id} 
                image={restaurant.capa} 
                title={restaurant.titulo} 
                rating={restaurant.avaliacao} 
                infos={getRestaurantTags(restaurant)}
                description={restaurant.descricao}
                id={restaurant.id}/>
                
            ))}
        </List>
    </div>
    )
}
    


export default ProductsList