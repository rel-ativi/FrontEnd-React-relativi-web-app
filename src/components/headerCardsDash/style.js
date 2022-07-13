import styled from "styled-components";

export const EstiloHeaderCardsDash = styled.div`
  background-color: ${({ theme: { cores } }) => cores.secundaria};
  color: ${({ theme: { cores } }) => cores.primaria};

  width: 100%;
  height: 100px;

  border-radius: 10px 10px 0 0;
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
