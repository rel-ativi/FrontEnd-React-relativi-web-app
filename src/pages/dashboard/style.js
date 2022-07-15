import styled from "styled-components";

import { mq } from "../../styles/global";

export const Main = styled.main`
  min-height: 80vh;
  width: 100vw;

  .container {
    width: 100vw;

    gap: 15px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  ${mq[1]} {
    .container {
      row-gap: 2rem;
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: space-around;
    }
  }
`;
