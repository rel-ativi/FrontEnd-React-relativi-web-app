// color: ${({ theme: { cores } }) => cores.marca};

import styled from "styled-components";

export const HeaderConteiner = styled.header`
  .divHeader {
    display: flex;
    justify-content: space-between;
    background-color: #030f26;
    color: aliceblue;
  }

  .sectionCalendario {
    background-color: #030f26;
    color: white;
    position: absolute;
    width: 250px;
    margin-left: 10%;
    margin-top: 3%;
  }

  .conteiner-calendario-atividades {
    display: flex;
    justify-content: center;
  }

  .text-calendario {
    width: 300px;
    margin: 5px;
    padding: 3px;
    background-color: #465e8c;
    border-radius: 10px;
    display: flex;
    justify-content: space-around;
  }

  .divLenbreSe {
    background-color: #030f26;
    width: 100%;
    height: 40px;
    color: #a7bdd9;
    opacity: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .divLenbreSeAtivado{
    background-color: #030f26;
    opacity: 80%;
    color: #a7bdd9;
  }

  .textInformacoes{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left:25% ;
  }

  .alinharTextoAtivado{
    margin-right: 25%;
  }
  
  @media (min-width: 375px) {
    .sectionCalendario {
      width: 300px;
      margin-left: 10%;
      margin-top: 3%;
    }
  }

  @media (min-width: 425px) {
    .divLenbreSe {
      justify-content: space-around;
    }

    .divHeader {
      display: flex;
      justify-content: space-around;
      background-color: #030f26;
      color: aliceblue;
    }

    .sectionCalendario {
      width: 300px;
      margin-left: 10%;
      margin-top: 3%;
    }
  }

  @media (min-width: 768px) {
    .divHeader {
      display: flex;
      justify-content: space-around;
      background-color: #030f26;
      color: aliceblue;
    }

    .sectionCalendario {
      background-color: #030f26;
      width: 400px;
      margin-left: 18%;
      margin-top: 3%;
    }

    .text-calendario {
      margin: 10px;
      width: 400px;
      padding: 3px;
      border-radius: 10px;
    }

    .divLenbreSe {
      background-color: #030f26;
      width: 100%;
      height: 40px;
      color: #a7bdd9;
      opacity: 80%;
      display: flex;
      align-items: center;
      justify-content: space-around;
    }

    @media (min-width: 1024px) {
      .sectionCalendario {
        width: 450px;
        margin-left: 25%;
      }

      .text-calendario {
        margin: 10px;
      }

      .text-calendario {
        width: 400px;
        margin: 10px;
        padding: 3px;
      }
    }

    /* @media (min-width: 1440px) {
        .text-calendario {
        margin: 20px;

    }
      .sectionCalendario {
        width: 700px;
        margin-left: 25%;
      }

      .text-calendario {
    width: 700px;
  }
    } */
  }
`;
