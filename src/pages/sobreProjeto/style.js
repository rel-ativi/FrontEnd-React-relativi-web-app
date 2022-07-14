import styled from "styled-components";
import { mq } from "../../styles/global";

export const HeaderConteiner = styled.header`
  background-color: ${({ theme: { cores } }) => cores.secundaria};
  height: 30vh;

  .logoDesktop {
    display: none;
  }
  .container {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    position: sticky;
    top: 0;

    ${mq[1]} {
      padding: 1.5rem;

      flex-direction: row;
      align-items: center;

      .logoMobile {
        display: none;
      }
      .logoDesktop {
        display: block;
      }
    }
  }

  p {
    font-size: 1.7rem;
    font-family: "Source Code Pro", monospace;
    font-weight: 600;
    color: ${({ theme: { cores } }) => cores.primaria};
    span {
      color: ${({ theme: { cores } }) => cores.marca};
    }

    ${mq[1]} {
      font-size: 2.2rem;
    }
  }

  button {
    align-self: flex-end;

    ${mq[1]} {
      align-self: unset;
    }
  }

  ${mq[1]} {
    height: 168px;
    display: flex;
  }
`;

export const EstiloSobreProjeto = styled.main`
  .container {
    gap: 2rem;
    display: flex;
    flex-direction: column;

    background-color: ${({ theme: { cores } }) => cores.primariaAlpha};
    backdrop-filter: blur(3px);
    border-radius: 10px;

    ${mq[2]} {
      max-height: 100vh;
      flex-wrap: wrap;
      justify-content: space-evenly;

      div {
        width: 45%;
      }
    }

    h1 {
      text-align: center;
      line-height: 1.6em;
      font-family: "Source Code Pro", monospace;
    }
    span {
      font-family: "Source Code Pro", monospace;
      font-weight: 600;

      color: ${({ theme: { cores } }) => cores.secundaria};

      span {
        color: ${({ theme: { cores } }) => cores.marca};
      }
    }

    p {
      max-width: 390px;
      margin: auto;

      color: ${({ theme: { cores } }) => cores.secundaria};

      font-weight: 500;
      font-size: 1.2rem;
      font-family: "Source Sans Pro", sans-serif;

      text-align: center;

      text-indent: 1.5em;

      line-height: 1.6em;

      ${mq[1]} {
        text-align: justify;
      }
    }
  }
`;
