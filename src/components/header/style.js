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

  height:100px;

    .mobile {
      display: none;
    }

    .parteInferiorHeaderDesktop{
      display: flex;
      justify-content:center ;
    }

    
  .divLenbreSeAtivado {
    display:none ;

  }

    .headerDesktop {
      display: flex;
    }

    .LogoDesktop {
      margin: 30px;
      margin-top:20px ;
    }

    .textRed {
    font-size: 16px;
    color: ${({ theme: { cores } }) => cores.marca};
  }

    .olaDesktop {
      font-size: 25px;
      color: ${({ theme: { cores } }) => cores.primaria};
    }

    .ajustarCorDesktop{
      color: ${({ theme: { cores } }) => cores.primaria};
      font-size:16px;
      margin:7.5px ;
    }

    .nomeUsuario{
      font-size: 30px;
      color: ${({ theme: { cores } }) => cores.marca};
    }

    .parteSuperiorHeaderDesktop{
      width:100% ;
      display:flex ;
      justify-content:space-around ;
      margin-top:-50px ;
      align-items:center ;
    }

    .informacoesProximaAulaDesktop{
      background-color: ${({ theme: { cores } }) => cores.primariaAlpha};
      border-radius:20px ;
      margin-left: 150px;
      margin-top:-60px ;
      margin-bottom:45px ;
      display:flex ;
      align-items: center;

    }

    .textInformacoesDesktop{
      padding:3px ;
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
    font-size: 20px;
    color: ${({ theme: { cores } }) => cores.marca};
  }

    .olaDesktop {
      font-size: 20px;
      color: ${({ theme: { cores } }) => cores.primaria};
    }

    .ajustarCorDesktop{
      color: ${({ theme: { cores } }) => cores.primaria};
      font-size:20px;
      margin:20px ;
    }

    .nomeUsuario{
      font-size: 25px;
      color: ${({ theme: { cores } }) => cores.marca};
    }

    .parteSuperiorHeaderDesktop{
      width:100% ;
      display:flex ;
      justify-content:space-around ;
      margin-top:-70px ;
      align-items:center ;
      margin-right: 80px;
    }

    
    .informacoesProximaAulaDesktop{
      background-color: ${({ theme: { cores } }) => cores.primariaAlpha};
      border-radius:25px ;
      padding:3px ;
      margin-left: 150px;
      margin-top:-60px ;
      margin-bottom:30px ;
      display: block;

    }

    
    .textInformacoesDesktop{
      padding:5px ;
      font-size:14px ;
    }
  }


  @media screen and (min-width: 1440px){

    .LogoDesktop {
      margin: 30px;
      margin-top:20px ;
      padding-left:300px ;
    }

    .parteSuperiorHeaderDesktop{
      margin-right: 80px;
    }

    .nomeUsuario{
      font-size: 35px;
    }


    .parteSuperiorHeaderDesktop{
      width:100% ;
      display:flex ;
      justify-content:space-around ;
      margin-top:-70px ;
      align-items:center ;
      margin-right: 200px;
    }

    .textInformacoesDesktop{
      padding:5px ;
      font-size:16px ;
    }

    .textRed {
    font-size: 25px;
    color: ${({ theme: { cores } }) => cores.marca};
  }

    .olaDesktop {
      font-size: 25px;
      color: ${({ theme: { cores } }) => cores.primaria};
    }

    .ajustarCorDesktop{
      color: ${({ theme: { cores } }) => cores.primaria};
      font-size:25px;
      margin:20px ;
    }



  }

  @media screen and (min-width: 2560px){

    .LogoDesktop {
      margin: 30px;
      margin-top:20px ;
      margin-left:500px ;
    }

    .parteSuperiorHeaderDesktop{
      width:100% ;
      display:flex ;
      justify-content:space-around ;
      margin-top:-70px ;
      align-items:center ;
      margin-right: 300px;
    }
    
  }

  
`;
