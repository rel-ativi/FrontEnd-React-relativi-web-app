import { useState } from "react";
import { useSelector } from "react-redux";
import {
  MdAccountCircle,
  MdDateRange,
  MdFavorite,
  MdHistory,
} from "react-icons/md";

import Footer from "../../components/footer";
import Header from "../../components/header";
import ListaDash from "../../components/listaDash";
import ModalAgendamento from "../../components/modalAgendamento";
import ModalAtividade from "../../components/modalAtividade";

import { Main } from "./style";

export default function Dashboard() {
  const [atividadeAtual, setAtividadeAtual] = useState({});
  const [modalAtividade, mostrarModalAtividade] = useState(false);
  const [calendario, mostrarCalendario] = useState(false);
  const [perfil, mostrarPerfil] = useState(true);
  const [form, mostrarForm] = useState(false);

  const { atividades, perfilUsuario, perfilProfissional } = useSelector(
    (state) => state
  );

  const agendaAtividades = () => {
    const listaIds = perfilUsuario?.activities?.map((atvd) => atvd.activity);
    return atividades.filter((atvd) => listaIds.includes(atvd.id));
  };

  const historicoAtividades = () => {
    const listaIds = perfilUsuario?.activities_history?.map(
      (atvd) => atvd.activity
    );
    return atividades.filter((atvd) => listaIds.includes(atvd.id));
  };

  const atividadesFavoritas = () => {
    const listaIds = perfilUsuario?.activities_favorites?.map((atvd) => atvd);

    return atividades.filter((atvd) => listaIds.includes(atvd.id));
  };

  return (
    <>
      <Header naDash />
      {calendario && (
        <ModalAgendamento
          mostrarCalendario={mostrarCalendario}
          atividadeAtual={atividadeAtual}
        />
      )}
      {modalAtividade && (
        <ModalAtividade
          atividade={atividadeAtual}
          mostrarModalAtividade={mostrarModalAtividade}
          mostrarCalendario={mostrarCalendario}
        />
      )}
      <Main>
        <div className="container">
          {(!!perfilUsuario.activities ||
            !!perfilUsuario.activities_history ||
            !!perfilUsuario.activities_favorites) && (
            <>
              <ListaDash
                icone={MdDateRange}
                titulo="Atividades Agendadas"
                arrayAtividades={agendaAtividades()}
                setAtividadeAtual={setAtividadeAtual}
                mostrarModalAtividade={mostrarModalAtividade}
                mostrarCalendario={mostrarCalendario}
              />
              <ListaDash
                icone={MdHistory}
                titulo="Histórico de Atividades"
                arrayAtividades={historicoAtividades()}
                setAtividadeAtual={setAtividadeAtual}
                mostrarModalAtividade={mostrarModalAtividade}
                mostrarCalendario={mostrarCalendario}
              />
              <ListaDash
                favorita
                icone={MdFavorite}
                titulo="Atividades Favoritas"
                arrayAtividades={atividadesFavoritas()}
                setAtividadeAtual={setAtividadeAtual}
                mostrarModalAtividade={mostrarModalAtividade}
                mostrarCalendario={mostrarCalendario}
              />
              <ListaDash
                perfil={perfil}
                mostrarPerfil={mostrarPerfil}
                form={form}
                mostrarForm={mostrarForm}
                icone={MdAccountCircle}
                titulo="Seu Perfil"
              />
            </>
          )}
          {!!perfilProfissional.email && (
            <>
              <ListaDash
                icone={MdDateRange}
                titulo="Suas Atividades"
                arrayAtividades={atividades}
                setAtividadeAtual={setAtividadeAtual}
                mostrarModalAtividade={mostrarModalAtividade}
                mostrarCalendario={mostrarCalendario}
              />
            </>
          )}
        </div>
      </Main>
      <Footer />
    </>
  );
}
