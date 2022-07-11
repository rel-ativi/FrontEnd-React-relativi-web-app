// color: ${({ theme: { cores } }) => cores.marca};

import styled from "styled-components";

export const HeaderConteiner = styled.header`

  background-color: ${({ theme: { cores } }) => cores.secundaria};
  height:153px ;

  .parteInferiorHeaderDesktop{
    display:none ;
  }

  .headerDesktop {
      display: none;
    }

  .divHeaderMobile {
    display: flex;
    justify-content: space-between;
  }

  .textRed {
    font-size: 32px;
    color: ${({ theme: { cores } }) => cores.marca};
  }

  .ola {
    font-size: 32px;
    color: aliceblue;
  }

  .sectionCalendario {
    background-color: ${({ theme: { cores } }) => cores.secundaria};
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
    background-color: ${({ theme: { cores } }) => cores.suporteTres};
    border-radius: 10px;
    display: flex;
    justify-content: space-around;
  }

  .divLenbreSe {
    height: 37px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${({ theme: { cores } }) => cores.suporteDoisAlpha};
    color: ${({ theme: { cores } }) => cores.suporteDois};
  }

  .divLenbreSeAtivado {
    color: ${({ theme: { cores } }) => cores.primaria};
    background-color: ${({ theme: { cores } }) => cores.secundariaAlpha};
    margin-top:-1px ;

  }

  .textInformacoes {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 25%;
  }

  .alinharTextoAtivado {
    margin-right: 25%;
  }

  @media screen and (min-width: 768px) {

  height:220px ;

    .mobile {
      display: none;
    }

    .parteInferiorHeaderDesktop{
      display: flex;
      justify-content:center ;
    }

    .headerDesktop {
      display: flex;
    }

    .LogoDesktop {
      margin: 55px;
    }

    .textRed {
    font-size: 20px;
    color: ${({ theme: { cores } }) => cores.marca};
  }

    .olaDesktop {
      font-size: 25px;
      color: ${({ theme: { cores } }) => cores.primaria};
    }

    .ajustarCorDesktop{
      color: ${({ theme: { cores } }) => cores.primaria};
      font-size:22.5px;
      margin:15px ;
    }

    .nomeUsuario{
      font-size: 30px;
      color: ${({ theme: { cores } }) => cores.marca};
    }

    .parteSuperiorHeaderDesktop{
      width:100% ;
      display:flex ;
      justify-content:space-between ;
      margin-top:-50px ;
      align-items:center ;
      margin-right: 5px;
    }

    .informacoesProximaAulaDesktop{
      background-color: ${({ theme: { cores } }) => cores.primariaAlpha};
      border-radius:20px ;
      margin-left: 150px;
      margin-top:-60px ;
      margin-bottom:25px ;
      display:flex ;
      align-items: center;

    }

    .textInformacoesDesktop{
      padding:5px ;
      font-size:12px ;
    }

    .selecionarOpicoes{
      display:flex ;
      justify-content:space-around ;
      align-items:center ;
      height: 100px;
      width: 400px;
    }

    .alinarTexto{
      display:flex ;
      font-size: 25px;
      align-items:center ;
    }
  }

  @media screen and (min-width: 1024px){
    .textRed {
    font-size: 35px;
    color: ${({ theme: { cores } }) => cores.marca};
  }

    .olaDesktop {
      font-size: 35px;
      color: ${({ theme: { cores } }) => cores.primaria};
    }

    .ajustarCorDesktop{
      color: ${({ theme: { cores } }) => cores.primaria};
      font-size:30px;
      margin:20px ;
    }

    .nomeUsuario{
      font-size: 45px;
      color: ${({ theme: { cores } }) => cores.marca};
    }

    .parteSuperiorHeaderDesktop{
      width:100% ;
      display:flex ;
      justify-content:space-between ;
      margin-top:-70px ;
      align-items:center ;
      margin-right: 80px;
    }

    
    .informacoesProximaAulaDesktop{
      background-color: ${({ theme: { cores } }) => cores.primariaAlpha};
      border-radius:25px ;
      padding:10px ;
      margin-left: 150px;
      margin-top:-70px ;
      margin-bottom:25px ;
      display: block;

    }

    
    .textInformacoesDesktop{
      padding:5px ;
      font-size:16px ;
    }
  }


  @media screen and (min-width: 1440px){
    .parteSuperiorHeaderDesktop{
      margin-right: 80px;
    }

    .nomeUsuario{
      font-size: 55px;
    }


    .parteSuperiorHeaderDesktop{
      width:100% ;
      display:flex ;
      justify-content:space-between ;
      margin-top:-70px ;
      align-items:center ;
      margin-right: 200px;
    }

    .textInformacoesDesktop{
      padding:12px ;
      font-size:22px ;
    }

    .textRed {
    font-size: 45px;
    color: ${({ theme: { cores } }) => cores.marca};
  }

    .olaDesktop {
      font-size: 35px;
      color: ${({ theme: { cores } }) => cores.primaria};
    }

    .ajustarCorDesktop{
      color: ${({ theme: { cores } }) => cores.primaria};
      font-size:40px;
      margin:20px ;
    }



  }

  
`;
