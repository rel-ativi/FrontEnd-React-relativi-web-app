import styled from "styled-components";
import { mq } from "../../styles/global";

export const EstiloLanding = styled.main`
  .container {
    min-height: 100vh;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;

    position: relative;

    span {
      color: ${({ theme: { cores } }) => cores.marca};
    }

    & > div {
      opacity: 0.7;

      gap: 1rem;
      display: flex;
      align-items: center;
      flex-direction: column;

      position: absolute;
      z-index: -1;

      p {
        font-weight: 300;
        font-size: 1.6rem;
        letter-spacing: 0.4rem;
        font-family: "Source Code Pro", monospace;
      }

      ${mq[1]} {
        right: 0;
        width: 25vw;
        max-width: 340px;
        min-width: 300px;

        padding-top: 5rem;
      }

      ${mq[2]} {
        padding-top: 1rem;

        gap: 2rem;

        p {
          font-size: 2rem;
        }
      }
    }

    .logoMobile {
      display: flex;
      justify-content: center;
    }

    .logoTablet {
      display: none;
    }

    .logoDesktop {
      display: none;
    }

    section {
      width: 100%;
      height: 95vh;
      padding: 13rem 0.5rem 0.5rem;

      gap: 2.3rem;
      flex-direction: column;
      display: flex;

      border-radius: 10px;
      background: #eef4f4;
      background: linear-gradient(0deg, #eef4f4 0%, #eef4f400 100%);

      div {
        gap: 1rem;
        display: flex;
        align-items: center;
        flex-direction: column;

        p {
          text-align: center;
        }
      }

      ${mq[1]} {
        right: 0;
        width: 25vw;
        max-width: 340px;
        min-width: 300px;

        padding: 0.5rem 0.5rem 2rem;

        justify-content: flex-end;

        position: absolute;
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
