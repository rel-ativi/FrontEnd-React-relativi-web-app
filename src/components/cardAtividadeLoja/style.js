import styled from "styled-components";

export const CardLoja = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  width: 300px;
  height: 300px;
  margin: 0;

  .imagem {
    display: flex;

    img {
      border-radius: 10px;
      height: 230px;
      border: 1px solid ${({ theme: { cores } }) => cores.suporteTres};
    }

    svg {
      color: ${({ theme: { cores } }) => cores.marca};
      position: absolute;
      transform: translate3d(250px, 10px, 0);
      cursor: pointer;
    }
  }

  .info-container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 80%;
    box-sizing: border-box;
    padding: 0.5rem;
    border: 2px solid ${({ theme: { cores } }) => cores.suporteTres};
    border-radius: 10px;
    background-color: ${({ theme: { cores } }) => cores.primaria};
    transform: translateY(-60%);
    p {
      font-size: smaller;
    }
  }

  .title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: ${({ theme: { cores } }) => cores.suporteUm};

    svg {
      color: ${({ theme: { cores } }) => cores.marca};
    }
  }

  .info-line {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    align-items: center;
    color: ${({ theme: { cores } }) => cores.suporteTres};
  }

  .info {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }

  .time-limit {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    width: 90%;

    p {
      margin-right: 30px;
    }
  }

  h4 {
    color: ${({ theme: { cores } }) => cores.suporteUm};
  }

  .rating {
    svg {
      color: ${({ theme: { cores } }) => cores.suporteUm};
    }
  }

  .favourite {
    color: ${({ theme: { cores } }) => cores.suporteUm};
  }
`;
