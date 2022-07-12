import { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CardAtividadeLoja from "../../components/cardAtividadeLoja";
import ModalAtividadeLoja from "../../components/modalAtividadeLoja";
import buscaAtividadesThunk from "../../store/modules/atividades/thunks";
import buscaPerfilProfissionalThunk from "../../store/modules/perfilProUsers/thunks";
import { buscaPerfilUsuarioThunk } from "../../store/modules/perfilUsuario/thunks";

import { ContainerLoja } from "./style";

export default function Loja() {
  const dispatch = useDispatch();
  const { atividades } = useSelector((state) => state);
  const { perfilUsuario } = useSelector((state) => state);
  const { perfilProfissional } = useSelector((state) => state);

  const [atividadeEmFoco, setAtividadeEmFoco] = useState();
  const [mostrarModalDescricao, setMostrarModalDescricao] = useState(false);
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    dispatch(buscaAtividadesThunk());
    dispatch(buscaPerfilUsuarioThunk());
    dispatch(buscaPerfilProfissionalThunk());
  }, []);

  return (
    <>
      <ContainerLoja>
        {atividades.map((atividade, index) => (
          <CardAtividadeLoja
            obj={atividade}
            key={index}
            setAtividadeEmFoco={setAtividadeEmFoco}
            setMostrarModalDescricao={setMostrarModalDescricao}
            favoritos={favoritos}
            setFavoritos={setFavoritos}
          />
        ))}
      </ContainerLoja>

      <ModalAtividadeLoja
        obj={atividadeEmFoco}
        mostrarModalDescricao={mostrarModalDescricao}
        setMostrarModalDescricao={setMostrarModalDescricao}
        favoritos={favoritos}
        setFavoritos={setFavoritos}
      />
    </>
  );
}
