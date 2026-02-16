import styled from "styled-components";
import { cores } from "../../styles";

export const BannerContainer = styled.div`
    height: 280px;
    width: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    
    .container {
    display: flex;
    flex-direction: column; /* empilha verticalmente */
    justify-content: space-between;
    height: 100%;
  }
`

export const Title = styled.h2`
    font-size: 32px;
    font-weight: 100;
    font-style: thin;
    color: ${cores.branco};
    padding-top: 24px;

`
export const Name = styled.h1`
    font-size: 32px;
    font-weight: 900;
    color: ${cores.branco};
    padding-bottom: 32px;
`