import styled from "styled-components";

import { mq } from "../../styles/global";

export const Main = styled.main`
  .container {
    min-height: 100vh;
    padding: 0;

    position: relative;

    .logoMobile {
      top: 10%;
      left: 50%;
      padding: 1.2rem 1.6rem;
      transform: translateX(-50%);
      border-radius: 10px;
      /* background-color: ${({ theme: { cores } }) => cores.primaria}; */
      position: fixed;
    }

    .logoTablet {
      display: none;
    }

    .logoDesktop {
      display: none;
    }

    aside {
      bottom: 0;
      width: 100%;

      color: ${({ theme: { cores } }) => cores.primaria};

      background-color: ${({ theme: { cores } }) => cores.secundariaAlpha};
      position: absolute;

      nav {
        display: none;

        a {
          text-decoration: none;
          font-size: 1.3rem;
          color: ${({ theme: { cores } }) => cores.primaria};

          :hover {
            span {
              color: ${({ theme: { cores } }) => cores.marca};
            }
          }

          span {
            color: ${({ theme: { cores } }) => cores.suporteDois};
          }
        }
      }

      a {
        color: ${({ theme: { cores } }) => cores.suporteDois};
      }

      .containerForm {
        padding: 1rem 0 2rem;

        gap: 0.5rem;
        display: flex;
        align-items: center;
        flex-direction: column;

        form {
          width: 100%;
          padding: 0 0.8rem;

          gap: 0.5rem;
          display: flex;
          align-items: center;
          flex-direction: column;
        }
      }

      ${mq[1]} {
        right: 0;
        width: 25vw;
        height: 100vh;
        max-width: 340px;
        min-width: 300px;

        gap: 10rem;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;

        nav {
          width: 100%;
          padding: 0 1.5rem;

          gap: 1rem;
          display: flex;
          align-items: flex-end;
          flex-direction: column;
        }
      }

      ${mq[3]} {
        gap: 15rem;
      }
    }

    ${mq[1]} {
      .logoMobile {
        display: none;
      }

      .logoTablet {
        display: block;
        position: fixed;
        position: fixed;
        bottom: 10%;
        left: 10%;
      }
    }

    ${mq[3]} {
      .logoTablet {
        display: none;
      }
      .logoDesktop {
        display: block;
        position: fixed;
        bottom: 10%;
        left: calc(((100vw - 1200px) / 2) + 100px);
      }
    }
  }
`;
