import { MdArticle } from "react-icons/md";
import Footer from "../../components/footer";
import FormEdicaoUser from "../../components/formEdicaoUser";
import HeaderCardsDash from "../../components/headerCardsDash";

import { ContainerDashBoard } from "./style";

export function Loja() {
  return (

      <ContainerDashBoard>
        <HeaderCardsDash icone={MdArticle}>
          Atividades Agendadas
        </HeaderCardsDash>
        <HeaderCardsDash icone={MdArticle}>
          Histórico de Atividades
        </HeaderCardsDash>
        <HeaderCardsDash icone={MdArticle}>
          Atividades Favoritas
        </HeaderCardsDash>
        <FormEdicaoUser/>
        <Footer />
      </ContainerDashBoard>

  );
}
