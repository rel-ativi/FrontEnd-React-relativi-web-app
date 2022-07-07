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

  select {
    width: 100%;
    height: 40px;
    padding: 0 1rem;

    font-size: 1rem;
    color: ${({ theme: { cores } }) => cores.suporteTres};

    border: none;
    border-radius: 10px;
    background-color: ${({ theme: { cores } }) => cores.primaria};
  }
`;
