import styled from "styled-components";
import { cores } from "../../styles";
import { Link } from "react-router-dom";

export const ButtonContainer = styled.div`
    padding: 4px 85px;
    background-color: ${cores.white};
    color: ${cores.pink};
    font-size: 14px;
    font-weight: bold;

`

export const ButtonLink = styled(Link)`
    padding: 4px 6px;
    background-color: ${cores.pink};
    color: ${cores.white};
    font-size: 14px;
    font-weight: 700;
    text-decoration: none;
`