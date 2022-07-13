//ignorar isto, so' testando
/* import { Link } from "react-router-dom";

import CardAtividadeLoja from "../../components/cardAtividadeLoja";
import ModalAtividadeLoja from "../../components/modalAtividadeLoja";
import Footer from "../../components/footer";

import { ContainerLoja } from "./style";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { buscaAtividadesThunk } from "../../store/modules/atividades/thunks";
import { buscaPerfilUsuarioThunk } from "../../store/modules/perfilUsuario/thunks";
import buscaProfissionaisThunk from "../../store/modules/listaProfissionais/thunks";

export function Loja() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(buscaAtividadesThunk());
    dispatch(buscaProfissionaisThunk());
    dispatch(buscaPerfilUsuarioThunk());
  }, []);

  const [atividadeEmFoco, setAtividadeEmFoco] = useState({});
  const [mostrarModalDescricao, setMostrarModalDescricao] = useState(false);
  const [favoritos, setFavoritos] = useState([]);

  const { atividades } = useSelector((state) => state);

  return (
    <>
      <ContainerLoja>
        {atividades.map((el) => (
          <CardAtividadeLoja
            obj={el}
            setAtividadeEmFoco={setAtividadeEmFoco}
            setMostrarModalDescricao={setMostrarModalDescricao}
            favoritos={favoritos}
            setFavoritos={setFavoritos}
            key={el.name}
          />
        ))}
        <ModalAtividadeLoja
          obj={atividadeEmFoco}
          mostrarModalDescricao={mostrarModalDescricao}
          setMostrarModalDescricao={setMostrarModalDescricao}
          favoritos={favoritos}
          setFavoritos={setFavoritos}
        />
      </ContainerLoja>
      <Footer />
    </>
  );
} */
