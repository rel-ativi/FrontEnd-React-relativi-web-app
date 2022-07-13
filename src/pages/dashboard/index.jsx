import { MdDateRange, MdFavorite, MdHistory } from "react-icons/md";
import AtividadesDashboard from "../../components/atividadesDashboard";
import Footer from "../../components/footer";
import FormEdicaoUser from "../../components/formEdicaoUser";
import Header from "../../components/header";
import { ContainerDash } from "./style";

export function Dashboard() {
  const arrayAtividades = [];
  return (
    <>
      <Header naDash />
      <ContainerDash>
        <div className="container">
          <AtividadesDashboard
            icone={MdDateRange}
            texto="Atividades Agendadas"
            arrayAtividades={arrayAtividades}
          />
          <AtividadesDashboard
            icone={MdHistory}
            texto="Histórico de Atividades"
            arrayAtividades={arrayAtividades}
          />
          <AtividadesDashboard
            icone={MdFavorite}
            texto="Atividades Favoritas"
            arrayAtividades={arrayAtividades}
          />
          <FormEdicaoUser />
        </div>
      </ContainerDash>
      <Footer />
    </>
  );
}
