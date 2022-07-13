//ignorar isto, so' testando
import { useState } from "react";
import { useSelector } from "react-redux";

import Footer from "../../components/footer";
import Header from "../../components/header";
import ModalAgenda from "../../components/modalAgenda";
import ModalConfirmarAgendamento from "../../components/modalConfirmarAgendamento";

import { ListaAtividades } from "./style";

export default function Loja() {
  const { atividades, perfilUsuario } = useSelector((state) => state);

  const [agenda, mostrarAgenda] = useState(false);
  const [calendario, mostrarCalendario] = useState(true);
  return (
    <>
      <Header
        atividades={atividades}
        perfilUsuario={perfilUsuario}
        mostrarAgenda={mostrarAgenda}
        naLoja
      />
      {agenda && <ModalAgenda mostrarAgenda={mostrarAgenda} />}
      {calendario && (
        <ModalConfirmarAgendamento mostrarCalendario={mostrarCalendario} />
      )}
      <ListaAtividades>
        <div className="container"></div>
      </ListaAtividades>
      <Footer />
    </>
  );
}
