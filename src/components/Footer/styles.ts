import styled from "styled-components";
import { cores } from "../../styles";

export const FooterContainer = styled.div`
    background-color: ${cores.white};
    padding: 40px 0;
    text-align: center;
    display: block;
`
export const SocialMedia = styled.div`
    margin-top: 33px;
    display: flex;
    justify-content: center; /* mantém tudo centralizado */ 
    gap: 8px; 

    img{
        height: 24px;
        width: 24px;  
    }
`

export const FooterDescription = styled.p`
    font-size: 10px;
    font-weight: 400;
    color: ${cores.pink};
    margin-top: 80px;
`