import styled from "styled-components";
import { mq } from "../../styles/global";

export const Card = styled.nav`
  height: 60px;
  width: 100vw;
  display: flex;

  overflow-x: scroll;

  border-top: 1px solid ${({ theme: { cores } }) => cores.primaria};
  padding: 4px;
  gap: 4px;

  background-color: ${({ theme: { cores } }) => cores.secundaria};

  position: fixed;
  bottom: 0;
  z-index: 3;

  div {
    padding: 15px;
    gap: 25px;
    width: fit-content;
  }

  ${mq[1]} {
    height: auto;
    width: auto;
    overflow: hidden;
    position: unset;

    div {
      justify-content: center;
      width: 100%;
    }
  }
`;
