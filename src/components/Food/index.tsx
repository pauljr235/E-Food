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

  const getDescription = (description: string) => {
    //ESPECIFICANDO O LIMITE MAXIMO DE LETRAS NA DESCRIÇAO
    if (description.length > 95) {
      return description.slice(0, 92) + '...'
    }
    return description
  }

  return (
    <>
      <Cartao>
        <img src={image} alt={title} />
        <TituloCartao>{title}</TituloCartao>
        <DescricaoCartao>{getDescription(description)}</DescricaoCartao>
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
