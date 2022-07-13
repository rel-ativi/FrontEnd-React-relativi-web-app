// color: ${({ theme: { cores } }) => cores.marca};

import styled from "styled-components";

export const AtividadesDivConteiner = styled.div`

.desktopAtividadesModal{
  display:none ;
}

.mobileAtividadesModal{
  display:block ;
}

  .sectionCalendario {
    background-color: ${({ theme: { cores } }) => cores.secundaria};
    color: white;
    position: absolute;
    width: 100%;
  }


  .conteiner-calendario-atividades {
    margin-top:-1px ;
    display: flex;
    justify-content: center;
  background-color: ${({ theme: { cores } }) => cores.secundaria};
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

  @media screen and (min-width: 768px){

    span{
      font-size:17px ;
    }

    .desktopAtividadesModal{
  display:block ;
}

.mobileAtividadesModal{
  display:none ;
}

.desktopAtividadesModal{
    width: 250px;
    height:75px ;
    background-color: ${({ theme: { cores } }) => cores.suporteTres};
    border-radius: 10px;
    margin-bottom:5px ;
    margin-top:5px ;
}

.desktopModalAtividades{
  display:flex ;
  justify-content:space-around ;
}

.ajustarTextModalAtividadesMeioDesktop{
  margin-left:17.5% ;
}

.ajustarTextModalAtividadesFimDesktop{
  margin-left:20% ;
}

.conteinerAtividadesModalDesktop{
  display:flex ;
  justify-content: center;
  width:35%;
}

.conteinerCardsModalDesktop{
  background-color:red ;
  width:1000px;


}

.conteiner-calendario-atividades {
    margin-top:-1px ;
    display: flex;
    justify-content: center;
  background-color: ${({ theme: { cores } }) => cores.secundaria};
  }



  }




`