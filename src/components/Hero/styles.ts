import styled from 'styled-components'
import { cores } from '../../styles'

export const Imagem = styled.div`
  width: 100%;
  height: 384px;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;
`

export const Logo = styled.img`
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  padding-top: 40px;
`

export const Titulo = styled.h2`
  position: absolute;
  top: 236px;
  left: 50%;
  transform: translateX(-50%);
  color: ${cores.pink};
  text-align: center;
`
