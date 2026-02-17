
import { useParams } from "react-router-dom";
import Banner from "../../components/Banner";
import DishesList from "../../components/DishesList";
import HeaderPerfil from "../../components/HeaderPerfil";



const Perfil = () => {
    const {id} = useParams()

    return(
    <>
    <HeaderPerfil/>
    <Banner image={""} type={""} name={""} />
    <DishesList cardapio={[]} />
    </>
    )
}



export default Perfil