import Dish from "../Dish";
import { List } from "./styles";

const DishesList = () => (
    <div className="container">
        <List>
            <Dish />
            <Dish />
            <Dish />
            <Dish />
            <Dish />
            <Dish />
        </List>
    </div>
)

export default DishesList