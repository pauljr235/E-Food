import styled from "styled-components";
import { cores } from "../../styles";

export const Card = styled.div`
    padding: 8px;
    background-color: ${cores.pink}
`
export const Imagem = styled.img`
    height: 160px;
    width: 100%;
`
export const Title = styled.h3`
    font-size: 16px;
    font-weight: 900;
    color: ${cores.white};
    margin-top: 8px;
`
export const Description = styled.p`
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    color: ${cores.white};
    margin-top: 8px;
    margin-bottom: 8px;
`