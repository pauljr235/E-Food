import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.section`
  border: 1px solid ${cores.pink};
  position: relative;
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
  justify-content: space-between; /* Alinha os itens nas extremidades opostas */
  align-items: center; /* Alinha verticalmente os itens no centro */

  margin-bottom: 16px;
  img {
    margin-left: 8px;
  }
`

export const Descricao = styled.p`
  font-size: 14px;
  color: ${cores.pink};
  line-height: 22px;
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
`
