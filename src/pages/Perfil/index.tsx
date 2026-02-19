import { useParams } from "react-router-dom";
import Banner from "../../components/Banner";
import DishesList from "../../components/DishesList";
import HeaderPerfil from "../../components/HeaderPerfil";
import { useEffect, useState } from "react";
import { Restaurant } from "../Home";

const Perfil = () => {
  const { id } = useParams();
  const [menu, setMenu] = useState<Restaurant | null>(null);

  useEffect(() => {
    fetch(`https://api-ebac.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((resJson) => {
        setMenu(resJson)
      });
  }, [id]);

  if (!menu) {
    return <p>Carregando...</p>;
  }

  return (
    <>
      <HeaderPerfil />

      <Banner
        image={menu.capa}
        type={menu.tipo}
        name={menu.titulo}
      />

      <DishesList cardapio={menu.cardapio} />
    </>
  );
};


export default Perfil