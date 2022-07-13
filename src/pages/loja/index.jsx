import { useSelector } from "react-redux";

import Footer from "../../components/footer";
import Header from "../../components/header";

import { useState } from "react";
import ModalAgenda from "../../components/modalAgenda";
import { ListaAtividades } from "./style";
import CardLoja from "../../components/cardAtividadeLoja";

export default function Loja() {
  const { atividades, perfilUsuario } = useSelector((state) => state);

  const [agenda, mostrarAgenda] = useState(false);
  const [atividadeAtual, setAtividadeAtual] = useState({});
  const [modalAtividade, mostrarModalAtividade] = useState(false);
  const [calendario, mosrtarCalendario] = useState(false);

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
        <div className="container">
          {atividades?.map((atvd) => (
            <CardLoja
              key={atvd.id}
              atividade={atvd}
              setAtividadeAtual={setAtividadeAtual}
              mostrarModalAtividade={mostrarModalAtividade}
              mostrarCalendario={mosrtarCalendario}
            />
          ))}
        </div>
      </ListaAtividades>
      <Footer />
    </>
  );
}
