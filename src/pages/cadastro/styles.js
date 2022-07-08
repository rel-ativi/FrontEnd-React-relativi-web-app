import styled from "styled-components";

export const EstiloCadastro = styled.div`
  .backgroundImage {
    box-sizing: border-box;
    height: 100vh;
  }

  .logoMobile {
    box-sizing: border-box;
    position: fixed;
    bottom: 80%;
    left: 50%;
    margin-left: -2.5rem;
  }

  .logoDesktop {
    display: none;
  }

  .containerCadastro {
    box-sizing: border-box;
    padding: 10px;
    position: fixed;
    height: 60vh;
    min-height: 500px;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    right: 0;
    bottom: 0;
    color: white;
  }
  .containerCadastro section {
    display: none;
  }

  .containerCadastro form {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
  }

  .containerBotao {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-top: 10px;
  }

  a {
    text-decoration: none;
    color: ${({ theme: { cores } }) => cores.suporteDois};
  }

  @media only screen and (min-width: 576px) {
    .containerCadastro {
      height: 100vh;
      width: 25vw;
      min-width: 300px;
    }

    .containerCadastro section {
      display: flex;
      flex-direction: column;
      text-align: end;
      margin-left: 40%;
      gap: 20px;
    }

    .containerCadastro form {
      width: 90%;
    }

    .logoMobile {
      display: none;
    }

    .logoDesktop {
      display: block;
      position: fixed;
      bottom: 10%;
      left: 10%;
    }
  }

  @media only screen and (min-width: 1200px) {
    .background {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: black;
    }
    .backgroundImage {
      width: 1200px;
    }

    .containerCadastro {
      right: calc((100vw - 1200px) / 2);
      max-width: 340px;
    }
    .logoDesktop {
      left: calc(((100vw - 1200px) / 2) + 100px);
    }
  }
`;

/* export const Background = styled.div`
  background-size: cover;
  background-image: ${(src) => `url(${src})`};
`; */
