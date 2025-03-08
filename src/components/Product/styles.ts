import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.section`
  border: 1px solid ${cores.pink};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%; /* Para garantir que o card ocupe o espaço completo */

  img {
    width: 100%;
    max-height: 220px;
  }
`

export const TagContainer = styled.div`
  background-color: ${cores.pink};
  color: ${cores.white};
  font-weight: bold;
  font-size: 14px;
  padding: 6px 12px;
  display: inline-block;
  top: 16px;
  right: 16px;
  position: absolute;
`

export const Titulo = styled.h3`
  color: ${cores.pink};
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  margin-left: 8px;
  margin-right: 8px;
  margin-top: 12px;

  img {
    width: 21px;
    height: 21px;
  }
`

export const Descricao = styled.p`
  font-size: 14px;
  color: ${cores.pink};
  line-height: 22px;
  margin-left: 8px;
  margin-right: 8px;
`

export const Botao = styled.button`
  background-color: ${cores.pink};
  color: ${cores.white};
  font-weight: bold;
  font-size: 14px;
  padding: 4px 6px;
  border: none;
  margin-top: 16px;
  margin-bottom: 8px;
  margin-left: 8px;
`

export const Rating = styled.h4`
  margin-left: 100px;
`
