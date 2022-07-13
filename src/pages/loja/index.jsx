//ignorar isto, so' testando
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import CardLoja from "../../components/cardAtividadeLoja";
import Filtro from "../../components/filtro";
import Footer from "../../components/footer";
import Header from "../../components/header";
import ModalAgenda from "../../components/modalAgenda";
import ModalAtividadeLoja from "../../components/modalAtividadeLoja";
import ModalConfirmarAgendamento from "../../components/modalConfirmarAgendamento";

import { ListaAtividades } from "./style";

export default function Loja() {
  const { atividades, perfilUsuario } = useSelector((state) => state);

  const [agenda, mostrarAgenda] = useState(false);
  const [listaAtividades, setListaAtividades] = useState([]);
  const [atividadeAtual, setAtividadeAtual] = useState({});
  const [modalAtividade, mostrarModalAtividade] = useState(false);
  const [calendario, mostrarCalendario] = useState(false);

  useEffect(() => {
    setListaAtividades([...atividades]);
  }, [atividades]);

  return (
    <>
      <Header
        atividades={atividades}
        perfilUsuario={perfilUsuario}
        mostrarAgenda={mostrarAgenda}
        naLoja
      />
      <Filtro atividades={atividades} setListaAtividades={setListaAtividades} />
      {agenda && <ModalAgenda mostrarAgenda={mostrarAgenda} />}
      {calendario && (
        <ModalConfirmarAgendamento
          mostrarCalendario={mostrarCalendario}
          atividadeAtual={atividadeAtual}
        />
      )}
      {modalAtividade && (
        <ModalAtividadeLoja
          atividade={atividadeAtual}
          mostrarModalAtividade={mostrarModalAtividade}
          mostrarCalendario={mostrarCalendario}
        />
      )}
      <ListaAtividades>
        <div className="container">
          {listaAtividades?.map((atvd) => (
            <CardLoja
              key={atvd.id}
              atividade={atvd}
              setAtividadeAtual={setAtividadeAtual}
              mostrarCalendario={mostrarCalendario}
              mostrarModalAtividade={mostrarModalAtividade}
            />
          ))}
        </div>
      </ListaAtividades>
      <Footer />
    </>
  );
}
