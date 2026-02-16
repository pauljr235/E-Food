import { Restaurant } from "../../models/Restaurant";
import Product from "../Product";
import { List } from "./styles";

type Props = {
    restaurants: Restaurant[]
}

const ProductsList = ({restaurants}: Props) => (
    <div className="container">
        <List>
            {restaurants.map((restaurant) =>(
                <Product
                key={restaurant.id} 
                image={restaurant.image} 
                title={restaurant.title} 
                rating={restaurant.rating} 
                infos={restaurant.infos} 
                description={restaurant.description}/>
            ))}
        </List>
    </div>
)

export default ProductsList