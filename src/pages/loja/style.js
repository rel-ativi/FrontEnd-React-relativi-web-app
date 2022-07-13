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
    /* margin-top: 10px;
    width: 100vw; */
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
