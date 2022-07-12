import styled from "styled-components";

export const EstiloHeaderCardsDash = styled.div`
  background-color: ${({ theme: { cores } }) => cores.secundaria};
  color: ${({ theme: { cores } }) => cores.primaria};

  width: 290px;
  height: 100px;

  border-radius: 10px 10px 0 0;
  font-size: 24px;
  font-family: "Source Code Pro", sans-serif;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 10px;
`;
