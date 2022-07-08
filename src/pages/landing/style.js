import styled from "styled-components"

export const EstiloLanding = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  margin-bottom: 2em;

  span {
    margin-right: 4em;
    font-size: 3rem;

    background: -webkit-linear-gradient(left, #030f26 40%, #f20544 50%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: inline;
  }
`

export const Background = styled.div`
  background-size: cover;
  background-image: ${({ url }) => `url(${url})`};
  min-height: 100vh;
`
