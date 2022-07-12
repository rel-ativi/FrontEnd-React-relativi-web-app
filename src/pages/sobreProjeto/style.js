import styled from "styled-components"

export const EstiloSobreProjeto = styled.main`
  h1 {
    text-align: center;
    line-height: 1.6em;
    font-family: "Source Code Pro", monospace;
  }
  span {
    color: ${({ theme: { cores } }) => cores.marca};
  }

  p {
    color: ${({ theme: { cores } }) => cores.secundaria};

    font-weight: 600;
    font-size: 1.2rem;
    font-family: "Source Code Pro", monospace;

    text-align: justify;
    text-indent: 1.5em;

    line-height: 1.6em;
  }
`
