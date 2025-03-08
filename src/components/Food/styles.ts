import styled from 'styled-components'
import { cores } from '../../styles'

export const Cartao = styled.div`
  background-color: ${cores.pink};
  padding: 8px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  img {
    width: 304px;
    height: 167px;
  }
`

export const TituloCartao = styled.h3`
  font-size: 16px;
  line-height: 18.75px;
  color: ${cores.white};
  text-align: start;
  margin-left: 8px;
  margin-top: 8px;
`

export const DescricaoCartao = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: ${cores.white};
  text-align: start;
  margin-left: 8px;
`

export const BotaoCartao = styled.button`
  width: 100%;
  padding: 4px 8px;
  color: ${cores.pink};
  font-weight: bold;
  font-size: 14px;
  background-color: ${cores.white};
  border: none;
  margin-top: 12px;
`
