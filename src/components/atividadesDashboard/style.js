import styled from "styled-components";
import { mq } from "../../styles/global";

export const EstiloContainerAtividade = styled.form`
  ${mq[3]} {
    background-color: ${({ theme: { cores } }) => cores.suporteDois};
    color: ${({ theme: { cores } }) => cores.primaria};

    width: 100%;
    height: 100%;
    max-height: 440px;

    overflow-y: scroll;
    border-radius: 0 0 10px 10px;

    padding: 0 0 1rem 0;
    gap: 5px;

    display: flex;
    flex-direction: column;
    align-items: center;

  }
  flex-direction: column;
`;
