import styled from "styled-components";

export const EstiloHeaderListaDash = styled.div`
  background-color: ${({ theme: { cores } }) => cores.secundaria};
  color: ${({ theme: { cores } }) => cores.primaria};

  width: 100%;
  height: 5rem;

  font-size: 16px;
  font-family: "Source Code Pro", sans-serif;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 10px;

  svg {
    font-size: 28px;
  }
`;
