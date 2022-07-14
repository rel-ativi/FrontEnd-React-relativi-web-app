//ignorar isto, so' testando
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import CardLoja from "../../components/cardAtividadeLoja";
import Filtro from "../../components/filtro";
import Footer from "../../components/footer";
import Header from "../../components/header";
import ModalAgenda from "../../components/modalAgenda";
import ModalAtividadeLoja from "../../components/modalAtividadeLoja";
import ModalConfirmarAgendamento from "../../components/modalConfirmarAgendamento";
import {
  buscaAtividadesProThunk,
  buscaAtividadesThunk,
} from "../../store/modules/atividades/thunks";
import buscaProfissionaisThunk from "../../store/modules/listaProfissionais/thunks";
import buscaPerfilProfissionalThunk from "../../store/modules/perfilProUsers/thunks";
import { buscaPerfilUsuarioThunk } from "../../store/modules/perfilUsuario/thunks";

import { ListaAtividades } from "./style";

export default function Loja() {
  const dispatch = useDispatch();

  const { atividades, perfilUsuario, perfilProfissional } = useSelector(
    (state) => state
  );

  const [contador, setContador] = useState(0);
  const [agenda, mostrarAgenda] = useState(false);
  const [listaAtividades, setListaAtividades] = useState([]);
  const [atividadeAtual, setAtividadeAtual] = useState({});
  const [modalAtividade, mostrarModalAtividade] = useState(false);
  const [calendario, mostrarCalendario] = useState(false);

  useEffect(() => {
    if (contador === 0) {
      if (!!perfilProfissional && atividades.length === 0) {
        dispatch(buscaAtividadesProThunk());
        dispatch(buscaPerfilProfissionalThunk());
      }
      if (!!perfilUsuario && atividades.length === 0) {
        dispatch(buscaAtividadesThunk());
        dispatch(buscaProfissionaisThunk());
        dispatch(buscaPerfilUsuarioThunk());
      }
      setContador(1);
    }

    setListaAtividades([...atividades]);
  }, [contador, atividades, dispatch, perfilProfissional, perfilUsuario]);

  return (
    <>
      <Header
        atividades={atividades}
        perfilUsuario={perfilUsuario}
        mostrarAgenda={mostrarAgenda}
        setAtividadeAtual={setAtividadeAtual}
        mostrarModalAtividade={mostrarModalAtividade}
        naLoja
      />
      <Filtro setListaAtividades={setListaAtividades} />
      {agenda && (
        <ModalAgenda
          mostrarAgenda={mostrarAgenda}
          setAtividadeAtual={setAtividadeAtual}
          mostrarModalAtividade={mostrarModalAtividade}
        />
      )}
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
