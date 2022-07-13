//ignorar isto, so' testando
import { useSelector } from "react-redux";

import Footer from "../../components/footer";
import Header from "../../components/header";

import { useState } from "react";
import ModalAgenda from "../../components/modalAgenda";
import { ListaAtividades } from "./style";

export default function Loja() {
  const { atividades, perfilUsuario } = useSelector((state) => state);

  const [agenda, mostrarAgenda] = useState(false);

  return (
    <>
      <Header
        atividades={atividades}
        perfilUsuario={perfilUsuario}
        mostrarAgenda={mostrarAgenda}
        naLoja
      />
      {agenda && <ModalAgenda mostrarAgenda={mostrarAgenda} />}
      <ListaAtividades>
        <div className="container"></div>
      </ListaAtividades>
      <Footer />
    </>
  );
}
