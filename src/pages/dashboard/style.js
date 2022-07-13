import styled from "styled-components";
import { mq } from "../../styles/global";

export const DashContainer = styled.div`
  box-sizing: border-box;
  padding: 10px;
  width: 100vw;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  min-height: 600px;
  gap: 10px;

  .header {
    box-sizing: border-box;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: ${({ theme: { cores } }) => cores.secundaria};
    color: ${({ theme: { cores } }) => cores.primaria};
    border-radius: 10px 10px 0 0;
  }
  label {
    color: white;
  }

  form {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 10px;
    gap: 10px;
    max-width: 300px;
  }

  ${mq[0]} {
    flex-direction: row;
  }
`;

export const AlteraPerfil = styled.div`
  background-color: ${({ theme: { cores } }) => cores.secundariaAlpha};
  border-radius: 10px;
  width: 250px;
`;

export const CriaAtividade = styled.div`
  background-color: ${({ theme: { cores } }) => cores.secundariaAlpha};
  border-radius: 10px;
  width: 250px;

  .container-dias {
    display: flex;
    flex-direction: column;
    gap: 0.27rem;
  }
  .container-dias-labels {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .container-labels {
    display: flex;
    flex-direction: column;
    font-size: smaller;
  }
`;
