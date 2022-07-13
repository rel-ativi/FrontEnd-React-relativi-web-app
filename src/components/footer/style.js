import styled from "styled-components";
import { mq } from "../../styles/global";

export const EstiloFooter = styled.footer`
  width: 100%;

  color: ${({ theme: { cores } }) => cores.primaria};
  background-color: ${({ theme: { cores } }) => cores.secundaria};

  .container {
    display: flex;
    flex-direction: column;

    a {
      color: ${({ theme: { cores } }) => cores.primaria};

      :hover {
        color: ${({ theme: { cores } }) => cores.marca};
      }
    }

    h4 {
      margin: 0.8rem 0;

      font-weight: 600;
      font-family: "Source Code Pro", monospace;

      span {
        cursor: pointer;
        color: ${({ theme: { cores } }) => cores.marca};
      }

      a {
        margin: 0 0.8rem;
        svg {
          transform: translateY(15%);
        }
      }
    }

    section {
      ul {
        width: 100%;
        padding: 0.5rem 0;

        row-gap: 1.2rem;
        column-gap: 0.5rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        li {
          width: 47%;
          max-width: 165px;

          gap: 0.3rem;
          display: flex;
          flex-direction: column;

          position: relative;

          p {
            font-size: 1.1rem;
          }

          span {
            font-size: 0.9rem;
            font-weight: 300;
            color: ${({ theme: { cores } }) => cores.suporteDois};
          }

          div {
            top: 0;
            right: 0;
            height: 100%;

            display: flex;
            align-items: flex-end;
            flex-direction: column;
            justify-content: space-between;

            position: absolute;
          }
        }
      }
    }

    ${mq[1]} {
      padding: 0.8rem 1.2rem;
      flex-direction: row;
      justify-content: space-between;

      section {
        width: 49%;
      }
    }

    ${mq[2]} {
      h4 {
        font-size: 1.4rem;
      }

      section {
        ul {
          li {
            p {
              font-size: 1.3rem;
            }

            span {
              font-size: 1rem;
            }
          }
        }
      }
    }
  }
`;
