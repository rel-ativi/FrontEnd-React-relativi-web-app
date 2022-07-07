import styled from "styled-components";

export const ContainerInput = styled.div`
  width: 100%;
  padding: 0.5rem;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label,
  small {
    padding: 0 0.8rem;
  }

  small {
    color: ${({ theme: { cores } }) => cores.marca};
  }

  div {
    height: 40px;
    width: 100%;

    border-radius: 10px;
    background-color: ${({ theme: { cores } }) => cores.primaria};
    position: relative;

    input {
      width: 100%;
      height: 100%;
      padding: 0 1rem;

      font-size: 1rem;
      color: ${({ theme: { cores } }) => cores.secundaria};

      border: none;
      background-color: transparent;

      ::placeholder {
        color: ${({ theme: { cores } }) => cores.suporteTres};
      }
    }

    svg {
      top: 50%;
      right: 1rem;

      color: ${({ theme: { cores } }) => cores.suporteTres};

      transform: translateY(-50%);
      position: absolute;
    }
  }
`;
