import Dish from "../Dish";
import { List } from "./styles";

type DishItem = {
  foto: string;
  preco: number;
  id: number;
  nome: string;
  descricao: string;
  porcao: string;
};

type Props = {
  cardapio: DishItem[];
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
