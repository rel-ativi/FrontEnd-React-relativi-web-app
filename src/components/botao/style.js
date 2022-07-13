import styled, { css } from "styled-components";

export const EstiloBotao = styled.button`
  padding: 0 0.8rem;

  width: ${({ larguraFixa }) => larguraFixa || "unset"};

  color: ${({ theme: { cores } }) => cores.primaria};
  border-radius: 10px;

  ${({ tamanho }) => {
    switch (tamanho) {
      case "p":
        return css`
          height: 30px;
          font-size: 12px;
        `;
      case "g":
        return css` 
          height: 50px;
          font-size: 24px;
        `;
      case "gg":
        return css`
          height: 75px;
          font-size: 36px;
        `;
      default:
        return css`
          height: 40px;
          font-size: 16px;
        `;
    }
  }};

  ${({ cor }) => {
    switch (cor) {
      default:
        return css`
          background-color: ${({ theme: { cores } }) => cores.marca};

          :hover {
            background-color: ${({ theme: { cores } }) => cores.marcaAlpha};
          }
        `;
    }
  }};
`;
