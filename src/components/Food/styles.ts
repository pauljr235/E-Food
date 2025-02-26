import styled from 'styled-components'
import { cores } from '../../styles'

export const Cartao = styled.div`
  background-color: ${cores.pink};
  padding: 8px 8px;
  text-align: center;
  img {
    width: 250px;
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
  margin-top: 8px;
`

export const BotaoCartao = styled.button`
  width: 96%;
  margin-top: 8px;
  color: ${cores.pink};
  font-weight: bold;
  font-size: 14px;
  background-color: ${cores.white};
  border: none;
  padding: 4px;
`
