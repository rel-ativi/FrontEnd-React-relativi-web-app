import styled from "styled-components";
import { mq } from "../../styles/global";

export const EstiloCard = styled.div`
  width: 100%;
  height: 45px;
  max-width: 390px;
  padding: 0 0.8rem;

  gap: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 1.2rem;
  color: ${({ theme: { cores } }) => cores.primaria};

  border-radius: 10px;
  background-color: ${({ theme: { cores } }) => cores.suporteDois};
  cursor: pointer;

  :hover {
    svg {
      color: ${({ theme: { cores } }) => cores.suporteTres};
    }
  }

  p:nth-child(1) {
    max-width: 30%;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  div {
    gap: 0.8rem;
    display: flex;
    svg {
      transform: translateY(5%);
      :hover {
        color: ${({ theme: { cores } }) => cores.secundaria};
      }
    }
    svg:nth-child(2) {
      :hover {
        color: ${({ theme: { cores } }) => cores.suporteUm};
      }
    }
  }

  p:last-child {
    display: none;
  }

  ${mq[1]} {
    padding: 0.8rem;
    height: fit-content;

    flex-wrap: wrap;

    p:last-child {
      width: 100%;
      display: block;
    }
  }
`;
