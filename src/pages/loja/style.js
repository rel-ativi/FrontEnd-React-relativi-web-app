import styled from "styled-components";

import { mq } from "../../styles/global";

export const ListaAtividades = styled.div`
  width: 100vw;
  min-height: 80vh;
  padding: 30px 0 0;

  .container {
    height: 78vh;

    overflow: scroll;

    gap: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  ${mq[1]} {
    .container {
      margin: auto;

      row-gap: 2rem;
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: space-around;
    }
  }
`;
