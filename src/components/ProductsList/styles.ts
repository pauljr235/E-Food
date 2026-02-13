import styled from "styled-components";
import { TagContainer } from "../Tag/styles";

export const List = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: relative;
    column-gap: 80px; 
    row-gap: 50px;
    list-style: none;
    margin-top: 80px;
    padding-bottom: 120px;
`