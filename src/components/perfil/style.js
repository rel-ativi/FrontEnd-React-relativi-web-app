import styled from "styled-components";
import { mq } from "../../styles/global";

export const EstiloPerfil = styled.div`
  width: 100%;

  gap: 0.5rem;
  display: flex;

  flex-direction: column;

  h4 {
    color: ${({ theme: { cores } }) => cores.primaria};
  }

  P {
    width: 100%;
    padding-bottom: 0.2rem;

    font-size: 0.9rem;
    color: ${({ theme: { cores } }) => cores.secundaria};

    border-bottom: 2px solid;
    border-color: ${({ theme: { cores } }) => cores.suporteDois};
  }

  div {
    gap: 0.5rem;
    display: flex;
    flex-direction: column;

    ${mq[2]} {
      flex-direction: row;
      column-gap: 2rem;

      div {
        width: 100%;
        display: flex;
        flex-direction: column;
      }
    }
  }

  button {
    margin: 0.8rem auto;
  }
`;
