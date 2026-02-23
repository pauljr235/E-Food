🍽️ E-Food — Aplicação React + TypeScript
Plataforma de listagem de restaurantes e cardápios, desenvolvida em React + TypeScript, consumindo a API pública da EBAC. O projeto utiliza componentização, styled-components, react-router-dom e boas práticas de arquitetura.

🏷️ Badges
https://img.shields.io/badge/React-18.0-blue
https://img.shields.io/badge/TypeScript-5.0-blue
https://img.shields.io/badge/Styled--Components-v5.3-pink
https://img.shields.io/badge/Status-Em%20Desenvolvimento-yellow

📸 Demonstração (Screenshots)
(Adicione aqui prints da Home e Perfil quando quiser)

🚀 Tecnologias Utilizadas
React + TypeScript

Styled-components

React-router-dom

Vite

Fetch API

Arquitetura baseada em componentes

📦 Instalação
bash
git clone https://github.com/SEU-USUARIO/NOME-DO-PROJETO.git
cd NOME-DO-PROJETO
npm install
npm run dev
📂 Estrutura do Projeto
Código
src/
 ├── components/
 │    ├── Banner/
 │    ├── Button/
 │    ├── Dish/
 │    ├── DishesList/
 │    ├── Footer/
 │    ├── Header/
 │    ├── HeaderPerfil/
 │    ├── Product/
 │    ├── ProductsList/
 │    └── Tag/
 ├── pages/
 │    ├── Home/
 │    └── Perfil/
 ├── routes/
 │    └── index.tsx
 ├── styles/
 ├── App.tsx
 └── main.tsx
🏠 Página Home
A página Home faz a requisição da lista de restaurantes e exibe-os através do componente ProductsList.

Modelo utilizado na Home
ts
export type CardapioItem = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type Restaurant = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: CardapioItem[]
}
Lógica principal
tsx
useEffect(() => {
  fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
    .then(res => res.json())
    .then(resJson => setProdutos(resJson))
}, [])
Renderização
tsx
<Header />
<ProductsList restaurants={produtos} />
👤 Página Perfil
A página Perfil exibe os detalhes de um restaurante específico, incluindo o cardápio.

Lógica principal
tsx
const { id } = useParams();
const [menu, setMenu] = useState<Restaurant | null>(null);

useEffect(() => {
  fetch(`https://api-ebac.vercel.app/api/efood/restaurantes/${id}`)
    .then((res) => res.json())
    .then((resJson) => setMenu(resJson));
}, [id]);
Renderização
tsx
<HeaderPerfil />
<Banner image={menu.capa} type={menu.tipo} name={menu.titulo} />
<DishesList cardapio={menu.cardapio} />
🧱 Componentes
🔹 Button
Aceita dois tipos: button e link.

tsx
type Props = {
  type: 'button' | 'link'
  title: string
  to?: string
  onClick?: () => void
  children: string
}
🔹 Tag
Componente simples para exibir etiquetas.

tsx
<Tag>{children}</Tag>
🔹 Product
Exibe um restaurante individual com:

Imagem

Tags

Título

Avaliação

Descrição

Link para página do restaurante

🔹 ProductsList
Recebe um array de restaurantes e renderiza vários Product.

Inclui lógica para gerar tags:

ts
if (restaurant.destacado) tags.push('Destaque da Semana')
if (restaurant.tipo) tags.push(restaurant.tipo)
🔹 Dish
Exibe um prato individual do cardápio.

tsx
<Dish
  image={item.foto}
  title={item.nome}
  description={item.descricao}
/>
🔹 DishesList
Renderiza uma lista de pratos recebidos via props:

tsx
<DishesList cardapio={menu.cardapio} />
🧭 Rotas
Arquivo routes/index.tsx:

tsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/restaurante/:id" element={<Perfil />} />
</Routes>
🖼️ Header e HeaderPerfil
Header → usado na Home

HeaderPerfil → usado na página Perfil

Ambos utilizam imagens de fundo e logotipo.

🦶 Footer
Renderizado globalmente no App.tsx.
