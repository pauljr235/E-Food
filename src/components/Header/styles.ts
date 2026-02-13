import styled from "styled-components";
import { cores } from "../../styles";

export const HeaderContainer = styled.div`
    padding: 45px 0;
    height: 300px;
    text-align: center;
    display: flex;
    flex-direction: column; /* organiza verticalmente */ 
    justify-content: space-between; /* um no topo, outro no fundo */ 
`

export const Title = styled.h2`
    width: 100%;
    font-size: 36px;
    font-weight: 900;
    font-family: 'Roboto', sans-serif;
    color: ${cores.pink};
    text-align: center;
`