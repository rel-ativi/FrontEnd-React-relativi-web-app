import styled from "styled-components";

export const ModalBackgroundDescricao = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme: { cores } }) => cores.secundariaAlpha};
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
`;

export const ModalDescricaoContainer = styled.div`
  box-sizing: border-box;
  height: fit-content;
  width: 100vw;
  background-color: ${({ theme: { cores } }) => cores.primaria};
  display: flex;
  flex-direction: column;
  z-index: 1000;
  max-width: 320px;

  .imagem {
    display: flex;

    img {
      height: 230px;
    }

    svg {
      color: ${({ theme: { cores } }) => cores.marca};
      position: absolute;
      transform: translate3d(270px, 10px, 0);
      cursor: pointer;
    }
  }

  .info-container {
    display: flex;
    flex-direction: column;
    padding: 10px;
    gap: 0.7rem;
  }

  .title {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: ${({ theme: { cores } }) => cores.suporteUm};
  }

  .info {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    .info-line {
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
    }

    .info-preco {
      display: flex;
      flex-direction: row;
      gap: 0.3rem;
      align-items: center;
      justify-content: space-between;

      p {
        font-size: smaller;
      }

      span {
        font-size: smaller;
        font-weight: 400;
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
        transform: translate(200%, 20%);
        color: ${({ theme: { cores } }) => cores.primaria};
        cursor: pointer;
      }
    }
  }
`;
