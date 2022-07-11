import styled from "styled-components"
import { mq } from "../../styles/global"

export const EstiloFooter = styled.footer`
  background-color: ${({ theme: { cores } }) => cores.secundaria};
  color: ${({ theme: { cores } }) => cores.primaria};
  width: 100%;

  ${mq[1]} {
    .container {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: space-between;

      ul {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        flex-wrap: wrap;
        width: 95%;

        span {
          color: ${({ theme: { cores } }) => cores.suporteDois};
          font-size: 0.7rem;
          cursor: auto;
        }
      }

      span {
        color: ${({ theme: { cores } }) => cores.marca};
        cursor: pointer;
      }
    }
  }

  ${mq[2]} {
    ul {
      width: 70%;
    }
  }

  ${mq[3]} {
    ul {
      width: 100%;
    }
  }
`
