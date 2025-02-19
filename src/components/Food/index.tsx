import { useState } from 'react'
import { Cartao, TituloCartao, DescricaoCartao, BotaoCartao } from './styles'
import Modal from '../Modal'

type FoodProps = {
  image: string
  title: string
  description: string
}

const Food = ({ image, title, description }: FoodProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Cartao>
        <img src={image} alt={title} />
        <TituloCartao>{title}</TituloCartao>
        <DescricaoCartao>{description}</DescricaoCartao>
        <BotaoCartao onClick={() => setIsOpen(true)}>
          Adicionar ao carrinho
        </BotaoCartao>
      </Cartao>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        image={image}
        title={title}
        description={description}
      />
    </>
  )
}

export default Food
