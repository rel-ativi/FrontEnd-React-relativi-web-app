import styled from "styled-components";
import { mq } from "../../styles/global";

export const EstiloListaDash = styled.section`
  width: 100%;

  border-radius: 10px;
  overflow: hidden;

  .containerLista {
    width: 100%;
    max-height: 300px;
    padding: 0.8rem;

    gap: 1rem;
    display: flex;
    flex-direction: column;

    overflow: scroll;

    border: 1px solid transparent;
    border-radius: 0 0 10px 10px;
    background-color: ${({ theme: { cores } }) => cores.secundariaAlpha};

    h3 {
      width: 100%;

      font-weight: 500;
      text-align: center;
      color: ${({ theme: { cores } }) => cores.primaria};
    }
  }

  ${mq[1]} {
    width: 48%;
  }
`;
