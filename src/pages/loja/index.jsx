import { useEffect } from "react";
import { useState } from "react";
import CardAtividadeLoja from "../../components/cardAtividadeLoja";
import ModalAtividadeLoja from "../../components/modalAtividadeLoja";
import API from "../../services/API";
import { ContainerLoja } from "./style";

export default function Loja() {
  const [lista, setLista] = useState([]);
  const [atividadeEmFoco, setAtividadeEmFoco] = useState(lista[1]);
  const [mostrarModalDescricao, setMostrarModalDescricao] = useState(false);

  const token = localStorage.getItem("@relativi:token");

  useEffect(() => {
    API.get("/activities", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => {
        setLista(response.data);
        console.log(response);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <ContainerLoja>
        {lista.map((atividade, index) => (
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
