import { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CardAtividadeLoja from "../../components/cardAtividadeLoja";
import ModalAtividadeLoja from "../../components/modalAtividadeLoja";
import buscaAtividadesThunk from "../../store/modules/atividades/thunks";
import { ContainerLoja } from "./style";

export default function Loja() {
  const dispatch = useDispatch();
  const { atividades } = useSelector((state) => state);
  const [atividadeEmFoco, setAtividadeEmFoco] = useState();
  const [mostrarModalDescricao, setMostrarModalDescricao] = useState(false);

  useEffect(() => {
    dispatch(buscaAtividadesThunk());
  }, []);
  /*   const token = localStorage.getItem("@relativi:token");

  useEffect(() => {
    API.get("/activities", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => {
        setLista(response.data);
        console.log(response);
      })
      .catch((error) => console.log(error));
  }, []); */

  return (
    <>
      <ContainerLoja>
        {atividades.map((atividade, index) => (
          <CardAtividadeLoja
            obj={atividade}
            key={index}
            setAtividadeEmFoco={setAtividadeEmFoco}
            setMostrarModalDescricao={setMostrarModalDescricao}
          />
        ))}
      </ContainerLoja>

      <ModalAtividadeLoja
        obj={atividadeEmFoco}
        mostrarModalDescricao={mostrarModalDescricao}
        setMostrarModalDescricao={setMostrarModalDescricao}
      />
    </>
  );
}
