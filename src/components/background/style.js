import styled, { keyframes } from "styled-components";

const appear = keyframes`
0%{
    opacity: 0;
}
30%{
    opacity: 0.7;
}
90%{
    opacity: 0.8;
}
100%{
    opacity: 0; 
}
`;

export const BackgroundContainer = styled.div`
  width: 100vw;
  height: 100%;
  min-height: 100vh;

  position: fixed;

  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: 40%;

  filter: grayscale(50%);

  animation: ${appear} 10s;
  z-index: -1;
`;
