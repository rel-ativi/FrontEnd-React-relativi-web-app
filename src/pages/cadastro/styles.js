import styled from "styled-components";
import { mq } from "../../styles/global";

export const EstiloCadastro = styled.div`
  position: relative;

  .logoMobile {
    top: 1%;
    left: 50%;
    padding: 1.2rem 1.6rem;
    transform: translateX(-50%);
    border-radius: 10px;
    /* background-color: ${({ theme: { cores } }) => cores.primaria}; */
    position: fixed;
  }

  .logoDesktop {
    display: none;
  }

  .logoTablet {
    display: none;
  }

  .containerCadastro {
    position: fixed;
    height: 60vh;
    min-height: 500px;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    right: 0;
    bottom: 0;
    color: white;

    background-color: ${({ theme: { cores } }) => cores.secundariaAlpha};
  }
  .containerCadastro {
    section {
      width: 90%;
      display: none;
      padding: 0 1.5rem;

      a {
        text-decoration: none;
        font-size: 1.3rem;
        color: ${({ theme: { cores } }) => cores.primaria};
        span {
          color: ${({ theme: { cores } }) => cores.suporteDois};
        }
      }
    }

    a {
      color: ${({ theme: { cores } }) => cores.suporteDois};
    }

    form {
      width: 100%;
      padding: 0.8rem;
      display: flex;
      flex-direction: column;
    }
  }

  .containerBotao {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-top: 10px;
  }

  /* @media only screen and (min-width: 576px) */
  ${mq[0]} {
    .containerCadastro {
      height: 100vh;
      width: 25vw;
      min-width: 300px;

      section {
        display: flex;
        flex-direction: column;
        text-align: end;

        gap: 20px;
      }

      form {
        width: 90%;
      }
    }
  }

  ${mq[1]} {
    .logoMobile {
      display: none;
    }

    .logoTablet {
      display: block;
      position: fixed;
      bottom: 10%;
      left: 10%;
    }
  }

  /* @media only screen and (min-width: 1200px)  */
  ${mq[3]} {
    .background {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .backgroundImage {
      width: 1200px;
    }

    .containerCadastro {
      right: calc((100vw - 1200px) / 2);
      max-width: 340px;
    }

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
`;
