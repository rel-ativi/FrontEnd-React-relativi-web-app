import styled from "styled-components";
import { mq } from "../../styles/global";

export const ModalBackgroundDescricao = styled.div`
  inset: 0;
  height: 100vh;
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

export const ModalAtividade = styled.div`
  height: fit-content;
  width: 100%;
  height: 90vh;
  background-color: ${({ theme: { cores } }) => cores.primaria};
  display: flex;
  flex-direction: column;
  z-index: 5;
  max-width: 390px;

  overflow: hidden;
  border-radius: 10px;

  position: relative;

  figure {
    width: 100%;
    height: 270px;

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
    top: 43%;
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
    height: 43vh;
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
      gap: 0.5rem;
      display: flex;

      svg {
        transform: translateY(15%);
      }
    }

    section {
      width: 100%;

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
    }
  }

  /* .info-line {
      display: flex;
      flex-direction: row;
      gap: 0.3rem;
      align-items: center;
      color: ${({ theme: { cores } }) => cores.suporteTres};

      p {
        max-width: 90%;
        font-size: smaller;
      }
    }

    .info-summary {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      p {
        margin-right: 10px;
      }
    }

    .info-preco {
      display: flex;
      flex-direction: row;
      gap: 0.3rem;
      align-items: center;
      justify-content: space-between;
      font-weight: 800;

      p {
        font-size: smaller;
      }

      span {
        font-size: smaller;
        font-weight: 400;
        margin-right: 10px;
      }

      div {
        display: flex;
        gap: 0.3rem;
        align-items: center;
      }
    }

    .rating {
      color: ${({ theme: { cores } }) => cores.suporteUm};
    }

    .button-container {
      button {
        width: 100%;
      }

      svg {
        position: fixed;
        transform: translate(-100%, -20%);
        color: ${({ theme: { cores } }) => cores.primaria};
      }
    }
  }

  ${mq[2]} {
    box-sizing: border-box;
    height: fit-content;
    width: 100vw;
    background-color: ${({ theme: { cores } }) => cores.primaria};
    display: flex;
    flex-direction: row;
    z-index: 1000;
    max-width: 800px;

    .imagem {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 450px;

      img {
        width: 440px;
        height: 340px;
      }

      svg {
        position: fixed;
        transform: translate3d(190px, -145px, 0);
      }
    }
  } */
`;
