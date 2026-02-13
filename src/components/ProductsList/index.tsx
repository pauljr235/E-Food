import Product from "../Product";
import { List } from "./styles";

import sushi from '../../assets/images/sushi.png'
import massa from '../../assets/images/massa.png'


const ProductsList = () => (
    <div className="container">
        <List>
            <li>
                <Product image={sushi} title="Hioke Sushi" rating="4.9" infos={['Destaque da Semana', 'Japonesa']} description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"/>
            </li>
            <li>
                <Product image={massa} title="Hioke Sushi" rating="4.6" infos={['Italiana']} description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tasdasdasdasdasdasdasdasudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"/>
            </li>
            <li>
                <Product image={massa} title="Hioke Sushi" rating="4.6" infos={['Italiana']} description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"/>
            </li>
            <li>
                <Product image={massa} title="Hioke Sushi" rating="4.6" infos={['Italiana']} description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"/>
            </li>
            <li>
                <Product image={massa} title="Hioke Sushi" rating="4.6" infos={['Italiana']} description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"/>
            </li>
            <li>
                <Product image={massa} title="Hioke Sushi" rating="4.6" infos={['Italiana']} description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"/>
            </li>
        </List>
    </div>
)

export default ProductsList