import styled from "styled-components";
import { mq } from "../../styles/global";

export const EstiloHeader = styled.header`
  color: ${({ theme: { cores } }) => cores.primaria};

  background-color: ${({ theme: { cores } }) => cores.secundaria};

  .container {
    gap: 3rem;
    display: flex;
    flex-direction: column;

    position: relative;

    .logoTablet {
      display: none;
    }
    .logoDesktop {
      display: none;
    }

    .lembrete {
      display: none;
    }

    span {
      font-family: "Source Code Pro", monospace;
    }

    p {
      display: flex;
      flex-direction: column;

      font-family: "Source Code Pro", monospace;
      font-size: 1.5rem;

      span {
        font-weight: 500;
        font-size: 2.5rem;
        color: ${({ theme: { cores } }) => cores.marca};
      }
    }

    .interacao {
      right: 0.8rem;
      height: 80%;

      display: flex;
      flex-direction: column;
      justify-content: space-between;
      position: absolute;

      div {
        cursor: pointer;

        svg {
          font-size: 24px;
          color: ${({ theme: { cores } }) => cores.marca};
          color: ${({ theme: { cores } }) => cores.marca};
        }

        span {
          display: none;
        }

        :hover {
          svg {
            color: ${({ theme: { cores } }) => cores.primaria};
          }
          span {
            color: ${({ theme: { cores } }) => cores.marca};
          }
        }
      }

      ${mq[1]} {
        top: 1.2rem;
        height: fit-content;

        gap: 3rem;
        flex-direction: row-reverse;

        div {
          gap: 1rem;
          display: flex;
          align-items: center;

          svg {
            transform: translateY(5%);
          }

          span {
            display: inline;
            font-size: 1.2rem;
          }
        }
      }
    }

    ${mq[1]} {
      padding: 1.2rem;

      .logoMobile {
        display: none;
      }
      .logoTablet {
        display: block;
      }

      .lembrete {
        right: 0.8rem;
        bottom: 1.5rem;
        padding: 0.5rem;

        gap: 1rem;
        display: flex;

        position: absolute;

        border-radius: 10px;
        background-color: ${({ theme: { cores } }) => cores.primariaAlpha};

        p,
        span,
        svg {
          font-size: 1rem;
        }

        p {
          color: ${({ theme: { cores } }) => cores.suporteUm};
        }

        svg {
          transform: translateY(15%);
          cursor: pointer;

          :hover {
            color: ${({ theme: { cores } }) => cores.marca};
          }
        }
      }
    }

    ${mq[2]} {
      padding: 1.5rem;

      flex-direction: row;

      .logoTablet {
        display: none;
      }
      .logoDesktop {
        width: 20%;

        display: flex;
        align-items: center;
        justify-content: center;
      }

      p {
        flex-direction: row;
        align-items: baseline;
      }

      .interacao {
        height: 50px;
        position: unset;
      }

      .lembrete {
        right: unset;
        left: 26%;
      }
    }
  }
`;
