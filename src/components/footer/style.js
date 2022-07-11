import styled from "styled-components"

export const EstiloFooter = styled.footer`
  background-color: ${({ theme: { cores } }) => cores.secundaria};
  color: ${({ theme: { cores } }) => cores.primaria};
  width: 100%;

  .container {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;

    ul {
      display: flex;
      gap: 30px;

      span {
        color: ${({ theme: { cores } }) => cores.suporteDois};
        font-size: 0.7rem;
        cursor: auto;
      }
    }

    span {
      color: ${({ theme: { cores } }) => cores.marca};
      cursor: pointer;
    }
  }
`
