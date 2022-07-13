import styled from "styled-components";

export const EstiloCardLoja = styled.article`
  width: 100%;
  min-height: 350px;
  max-width: 390px;

  display: flex;
  flex-direction: column;
  align-items: center;

  border: 1px solid red;
  position: relative;

  figure {
    width: 100%;
    height: 70%;

    border: 1px solid blue;

    display: flex;

    overflow: hidden;
    border-radius: 10px;

    background-image: ${({ url }) => `url(${url})`};
    background-size: cover;

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

  section {
    bottom: 0;
    width: 80%;
    padding: 0.5rem;

    gap: 0.5rem;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;

    border: 2px solid;
    border-radius: 10px;
    border-color: ${({ theme: { cores } }) => cores.suporteTres};
    background-color: ${({ theme: { cores } }) => cores.primaria};

    position: absolute;

    .title {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      h3 {
        font-weight: 500;
        font-family: "Source Code Pro", monospace;
        color: ${({ theme: { cores } }) => cores.suporteUm};
        font-size: 1.4rem;
      }

      svg {
        font-size: 1.4rem;
        color: ${({ theme: { cores } }) => cores.marca};
        cursor: pointer;

        :hover {
          color: ${({ theme: { cores } }) => cores.secundaria};
        }
      }
    }

    .info {
      display: flex;
      flex-direction: column;

      color: ${({ theme: { cores } }) => cores.suporteTres};

      div:first-of-type {
        color: ${({ theme: { cores } }) => cores.suporteUm};

        p {
          font-size: 1.4rem;
        }

        svg {
          transform: translateY(20%);
        }
      }

      div {
        gap: 0.5rem;
        display: flex;

        p {
          max-width: 70%;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

        svg {
          transform: translateY(10%);
        }
      }
    }
  }

  .time-limit {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    width: 90%;

    p {
      margin-right: 10px;
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
    cursor: pointer;
  }
`;
