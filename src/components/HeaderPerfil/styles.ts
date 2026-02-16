
import styled from "styled-components";
import { cores } from "../../styles";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;

  height: 180px;
  padding: 0 120px;

  background-size: cover;
  background-position: center;

  color: ${cores.pink};

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1024px;
  }

  img {
    height: 60px;
  }

  p {
    font-size: 18px;
    font-weight: bold;

  }

  a{
    text-decoration: none;
    font-size: 18px;
    font-weight: 900;
    color: ${cores.pink};
  }
`;