import styled from "styled-components";

export const EstiloFormEdicaoUser = styled.form`
  background-color: ${({ theme: { cores } }) => cores.secundariaAlpha};
  color: ${({ theme: { cores } }) => cores.primaria};

  width: 290px;


  border-radius: 0 0 10px 10px;

  padding: 0 0 1rem 0;
  gap: 5px;

  .pagamento {
    display: flex;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerCardsDash = styled.div``;
