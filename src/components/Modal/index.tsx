import {
  Modal,
  ModalButton,
  ModalContainer,
  ModalDescription,
  ModalFechar,
  ModalImage,
  ModalInfo,
  ModalTitle
} from '../FoodList/styles'
import fechar from '../../assets/images/fechar.png'

type ModalProps = {
  isOpen: boolean
  image: string
  title: string
  description: string
  onClose: () => void
}

const FoodModal = ({
  isOpen,
  image,
  title,
  description,
  onClose
}: ModalProps) => {
  if (!isOpen) return null // Se o modal não estiver aberto, não renderiza nada

  return (
    <Modal>
      <ModalContainer>
        <header>
          <ModalFechar onClick={onClose} src={fechar} alt="Fechar" />
        </header>
        <ModalImage src={image} alt={title} />
        <ModalInfo>
          <ModalTitle>{title}</ModalTitle>
          <ModalDescription>{description}</ModalDescription>
          <ModalButton>Adicionar ao carrinho</ModalButton>
        </ModalInfo>
      </ModalContainer>
    </Modal>
  )
}

export default FoodModal
