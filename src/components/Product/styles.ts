import styled from "styled-components";
import { cores } from "../../styles";
import { TagContainer } from "../Tag/styles";


export const Container = styled.div`
  padding: 8px;
  border: 2px solid ${cores.pink};
  border-top: none;
  width: 100%;
  box-sizing: border-box;
`


export const Card = styled.div`
    background-color: ${cores.branco};
    position: relative;
    width: 100%;

        ${TagContainer}{
        font-size: 12px;
        font-weight: bold;
        margin-right: 8px;
        
    }
`


export const Imagem = styled.img`
    width: 100%;
    height: 220px;
    object-fit: cover;
    display: block;
`

export const Titulo = styled.h3`
    color: ${cores.pink};
    font-size: 18px;
    font-weight: bold;
`
export const CardInfo = styled.div`
    display: flex;
    justify-content: space-between;
`
export const Ratings = styled.div`
    display: inline-flex;
    color: ${cores.pink};
    font-size: 18px;
    font-weight: 700;
    p{
        margin-right: 8px
    }
    img{
        margin-right:1px;
    }
`

export const Descricao = styled.p`
    font-size: 14px;
    line-height: 22px;
    font-weight: 400;
    margin-top: 16px;
    margin-bottom: 20px;
    color: ${cores.pink};
`

export const Infos = styled.div`
    position: absolute;
    top: 16px;
    right:0;
`