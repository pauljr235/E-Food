import { CardapioItem, Restaurant } from "../../pages/Home";
import Dish from "../Dish";
import { List } from "./styles";


type Props = {
   cardapio: CardapioItem[]; 
  };

const DishesList = ({ cardapio }: Props) => (
  <div className="container">
    <List>
      {cardapio.map((item) => (
        <Dish
          key={item.id}
          image={item.foto}
          title={item.nome}
          description={item.descricao}
        />
      ))}
    </List>
  </div>
);

export default DishesList;
