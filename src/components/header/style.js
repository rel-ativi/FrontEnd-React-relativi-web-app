// color: ${({ theme: { cores } }) => cores.marca};

import styled from "styled-components";

export const HeaderConteiner = styled.header`
background-color:${({theme:{cores}})=>cores.secundaria} ;
  
  .divHeader {
    display: flex;
    justify-content: space-between;
    color: aliceblue;
  }

  .textRed{
    font-size:32px;
    color: #F20544;
  }

  .tamanhoAjustar{
    font-size:32px;
  }

  .sectionCalendario {
    background-color: #030f26;
    color: white;
    position: absolute;
    width: 100%;
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

`;
