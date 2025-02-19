import styled from 'styled-components'
import { cores } from '../../styles'

export const Lista = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 40px;
  row-gap: 40px;
  margin-top: 56px;
  padding-bottom: 120px;
`

export const Modal = styled.div`
  position: fixed;
  top: 200px;
  left: 329px;
  width: 100%;
  height: 100%;
  z-index: 1;

  &.visivel {
    display: flex;
  }
`

export const ModalContainer = styled.div`
  display: flex;
  background-color: ${cores.pink};
  position: relative;
  max-width: 1040px;
`

export const ModalImage = styled.img`
  height: 280px;
  width: 280px;
  padding-top: 32px;
  padding-bottom: 32px;
  padding-left: 32px;
`

export const ModalInfo = styled.div`
  padding-left: 24px;
  padding-right: 32px;
`
export const ModalTitle = styled.h3`
  padding-bottom: 16px;
  padding-top: 32px;
  color: ${cores.white};
`
export const ModalDescription = styled.p`
  padding-bottom: 20px;
  color: ${cores.white};
`

export const ModalButton = styled.button`
  padding: 4px 7px;
  margin-bottom: 60px;
  color: ${cores.pink};
  font-weight: bold;
  border: none;
  cursor: pointer;
`
export const ModalFechar = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  padding: 8px;
  cursor: pointer;
`
