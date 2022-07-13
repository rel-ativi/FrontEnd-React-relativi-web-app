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
    font-size: 45px;
    font-family: "Source Code Pro", monospace;
    font-weight: 600;
    color: ${({ theme: { cores } }) => cores.primaria};
    span {
      color: ${({ theme: { cores } }) => cores.marca};
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
export const Div = styled.div`
  .container {
    margin-bottom: 20px;

    gap: 2rem;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
  }

  svg {
    font-size: 30px;
  }

  .paragrafoNome {
    font-size: 30px;
    font-weight: bold;
    color: ${({ theme: { cores } }) => cores.secundaria};
  }
  .paragrafoCargo {
    font-size: 16px;
    color: ${({ theme: { cores } }) => cores.marca};
  }

  .paragrafoTexto {
    font-size: 18px;
  }

  .links {
    gap: 1rem;
    display: flex;
    a {
      color: ${({ theme: { cores } }) => cores.suporteTres};
      cursor: pointer;

      :hover {
        color: ${({ theme: { cores } }) => cores.secundaria};
      }
    }
  }

  .cards {
    width: 100%;
    height: 400px;
    /* margin-right: 3px; */
    /* margin-top: 80px; */

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    border: 3px solid;
    border-color: ${({ theme: { cores } }) => cores.secundaria};
    border-radius: 10px;

    p {
      text-align: center;
    }

    :hover {
      p {
        cursor: default;
      }
      box-shadow: 1px 1px 5px 1px #666;
    }
  }

  img {
    width: 120px;
    height: 120px;

    border-radius: 60px;
  }

  ${mq[1]} {
    .cards {
      width: 30%;
    }
  }
`;
