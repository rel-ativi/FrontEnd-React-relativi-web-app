import styled, { createGlobalStyle } from "styled-components";

const breakpoints = [576, 768, 992, 1200, 2000];
export const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

export const EstiloGlobal = createGlobalStyle`
:root{
    --toastify-color-light: ${({ theme: { cores } }) => cores.primaria};
    --toastify-color-success: ${({ theme: { cores } }) => cores.sucesso};
    --toastify-color-error: ${({ theme: { cores } }) => cores.marca};
    --toastify-text-color-light: ${({ theme: { cores } }) => cores.secundaria};
}


*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Source Sans Pro', sans-serif;
    transition: 0.2s;
}

body{
    color: ${({ theme: { cores } }) => cores.secundaria};
    background-color: ${({ theme: { cores } }) => cores.primaria};
}

img{
    width: 100%;
}


ul,ol{
    list-style: none;
}

button{
    font-family: 'Source Code Pro', monospace;
    border: none;
    cursor: pointer;
}

.container{
    width: 100%;
    max-width: 1200px;
    margin: auto;
    padding: 0.8rem;
    display:flex;
    align-items: flex-start;
    flex-direction: column;
    gap:0.5rem;
}
`;

export const Logo = styled.h1`
  width: 100%;
  padding: 0.5rem 0;

  color: ${({ theme: { cores } }) => cores.secundaria};
  font-family: "Source Code Pro", monospace;

  span {
    color: ${({ theme: { cores } }) => cores.marca};
    font-family: "Source Code Pro", monospace;
  }
`;

export const ContainerFlex = styled.div`
  width: 100%;
  height: 100%;

  display: flex;

  flex-wrap: ${({ flexWrap }) => flexWrap || "no-wrap"};
  align-items: ${({ alignItems }) => alignItems || "stretch"};
  flex-direction: ${({ flexDirection }) => flexDirection || "row"};
  justify-content: ${({ justifyContent }) => justifyContent || "flex-start"};
  gap: ${({ gap }) => gap || "1px"};
`;
