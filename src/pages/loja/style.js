import styled from "styled-components";

import { mq } from "../../styles/global";

export const ListaAtividades = styled.div`
  width: 100vw;
  min-height: 80vh;
  padding: 1px;

  .container {
    height: 78vh;

    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-top: 10px;
    width: 100vw;
  }

  ${mq[0]} {
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 1200px;
    margin: auto;
    gap: 50px;
    justify-content: center;
  }
`;
