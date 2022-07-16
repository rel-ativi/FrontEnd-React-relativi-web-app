import styled from "styled-components";
import { mq } from "../../styles/global";

export const ModalAtividadeBackground = styled.div`
  inset: 0;
  height: 100vh;
  width: 100vw;
  padding: 0.8rem;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  background-color: ${({ theme: { cores } }) => cores.secundariaAlpha};
  backdrop-filter: blur(2px);
  position: fixed;
  z-index: 4;
`;

export const EstiloModalAtividade = styled.div`
  height: fit-content;
  width: 100%;
  height: 90vh;
  background-color: ${({ theme: { cores } }) => cores.primaria};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 5;
  max-width: 390px;
  max-height: 550px;

  overflow: hidden;
  border-radius: 10px;

  position: relative;

  figure {
    width: 100%;
    height: 250px;

    display: flex;

    overflow: hidden;
    border-radius: 10px 10px 0 0;

    background-image: ${({ url }) => `url(${url})`};
    background-position: center;
    background-size: cover;

    position: relative;

    svg {
      top: 0.8rem;
      right: 0.8rem;
      width: 40px;
      height: 40px;

      padding: 0.5rem;

      font-size: 1rem;
      color: ${({ theme: { cores } }) => cores.marca};

      border-radius: 50%;
      background-color: ${({ theme: { cores } }) => cores.primaria};
      position: absolute;
      cursor: pointer;

      :hover {
        color: ${({ theme: { cores } }) => cores.secundaria};
      }
    }
  }

  .title {
    top: 40%;
    width: 100%;

    padding: 0.8rem;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    position: absolute;

    background-color: ${({ theme: { cores } }) => cores.secundaria};

    h3 {
      font-weight: 500;
      font-family: "Source Code Pro", monospace;
      color: ${({ theme: { cores } }) => cores.primaria};
      font-size: 1.4rem;

      max-width: 80%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    svg {
      font-size: 1.4rem;
      color: ${({ theme: { cores } }) => cores.marca};
      cursor: pointer;

      :hover {
        color: ${({ theme: { cores } }) => cores.primaria};
      }
    }
  }

  .info {
    height: 270px;
    padding: 1rem;
    overflow: scroll;

    gap: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    & > div:first-of-type {
      color: ${({ theme: { cores } }) => cores.suporteUm};

      p {
        font-weight: 700;
        font-size: 1.4rem;
      }

      svg {
        transform: translateY(40%);
      }
    }

    div {
      width: 100%;
      height: fit-content;

      gap: 0.5rem;
      display: flex;

      svg {
        transform: translateY(15%);
      }
    }

    section {
      width: 100%;
      height: fit-content;

      display: flex;
      justify-content: space-between;

      div {
        width: 48%;

        p {
          span {
            font-weight: 600;
          }
        }
      }
    }

    & > div:last-of-type {
      display: flex;
      flex-direction: column;

      button {
        gap: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    ${mq[3]} {
      height: 300px;
    }
  }

  ${mq[1]} {
    width: 90vw;
    height: 70vh;
    max-width: 700px;
    max-height: 410px;

    flex-direction: row;
    justify-content: space-between;

    figure {
      width: 50%;
      height: 100%;

      border-radius: 0;
    }

    section {
      height: 100%;
      width: 50%;

      .info {
        height: 100%;

        & > p {
          height: 300px;

          overflow: scroll;
        }
      }

      .title {
        top: unset;
        bottom: 0;
        left: 0;

        width: 50%;
      }
    }
  }
`;
