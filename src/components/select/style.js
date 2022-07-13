import styled from "styled-components";

export const ContainerSelect = styled.div`
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
    width: 100%;
    height: 40px;
    padding: 0 1rem;

    border-radius: 10px;
    background-color: ${({ theme: { cores } }) => cores.primaria};

    &:focus-within {
      border: 2px solid;
      border-radius: 10px;
      border-color: ${({ theme: { cores } }) => cores.secundaria};
    }

    select {
      width: 100%;
      font-size: 1rem;
      color: ${({ theme: { cores } }) => cores.suporteTres};

      background-color: ${({ theme: { cores } }) => cores.primaria};

      border: none;
      outline: none;
    }
  }
`;
